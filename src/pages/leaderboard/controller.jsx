import { collection, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { db } from '../../firebase';

function Controller() {
  const [leaderboard, setLeaderboard] = useState([]);

  const GetDataLeaderboard = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "memoryCard"));
      const data = querySnapshot.docs.map(doc => {
        return { id: doc.id,...doc.data() };
      });
      const filteredData = data.filter(entry => !(entry.moves === 0 || entry.time === '00:00'));
      const sortedData = filteredData.sort((a, b) => {
        if (a.moves === b.moves) {
          return a.time.localeCompare(b.time);
        }
        return a.moves - b.moves;
      });
      const topThree = sortedData.slice(0, 3);
      setLeaderboard(topThree);

    } catch (e) {
      console.error("Error fetching document: ", e);
    }
  }, []);

  useMemo(() => {
    GetDataLeaderboard();
  }, [GetDataLeaderboard]);
  return {
    leaderboard,
    GetDataLeaderboard,
  }

}
export default Controller;

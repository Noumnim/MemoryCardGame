import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from './../../firebase'; 
import { useNavigate } from 'react-router-dom';

const UserNameController = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const addUserNameToFirestore = async (name) => {
    try {
      const docRef = await addDoc(collection(db, "memoryCard"), { 
        name,
        moves: 0,
        time: '00:00'
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim().length > 10) {
      alert("Usernames must not exceed 10 characters");
      return;
    }
    try {
      const docId = await addUserNameToFirestore(username);
      navigate('/play', { state: { username, docId } });
    } catch (e) {
      console.error("Failed to add username to Firestore", e);
    }
  };

  return {
    handleInputChange,
    handleSubmit,
    username,
  };
};

export default UserNameController;

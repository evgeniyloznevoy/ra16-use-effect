import { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(process.env.REACT_APP_USERS_URL)
        .then(response => response.json())
        .then((users) => {
          setLoading(false);
          setUsers(users)
        })
    } catch (e) {
      console.error(e);
    }
  }, [])

  const getDetails = (id) => {
    setId(id);
  }

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      <List users={users} getDetails={getDetails} />
      <Details id={id} />
    </div>
  );
}
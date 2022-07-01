import './App.css';
import React,{ useState, useEffect} from 'react';
import UsersComp from './Components/Users';
function App() {

  const urlUsers = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([])

 useEffect(() => {
   fetchData(urlUsers)
   return () => {
     
   }
 }, [])
 
 const fetchData = async (url) => {
  await fetch(url)
  .then((res) =>res.json())
  .then((data) =>setUsers(data))
  .catch((error) =>console.log(error))
 }

//console.log(users)

  return (
    <div className="App">
      <h1>Users</h1>
      <hr />
      <div>
        <UsersComp users={users} />
      {/* {users.map((item) =>(
            <UsersComp key={item.id} name={item.name} username={item.username} email={item.email} />
            
        ))} */}
      </div>
    </div>
  );
}

export default App;

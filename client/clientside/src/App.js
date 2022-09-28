import logo from './logo.svg';
import './App.css';
import GetUsers from './commponnents/getUsers';

import { createClient, Provider } from 'urql';
import CreateUser from './commponnents/createUser';






function App() {


  return (


    <div style={{
      margin: 'auto',
      width: '50',
      border: '3px solid green',
      padding: ' 200px',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
    }}>
      <GetUsers />
      <div>
        <CreateUser />

      </div>
    </div>




  );
}

export default App;

{/*import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import { assertDirective } from 'graphql';

const GET_USERS = gql`
query users {
  users{
    userId
    firstName
    lastName
    nickName
    phoneNumbers
    address
    photo
  }
}
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  [...data.users].sort((a,b) =>{
    if(a.nickName != "" && b.nickName != "")
    {
      if(a.nickName < b.nickName) {return -1}
      if(a.nickName > b.nickName) {return 1}
    } else
    if(a.nickName != "")
    {
      if(a.nickName < b.firstName) {return -1}
      if(a.nickName > b.firstName) {return 1}

    }else
    if(b.nickName != "")
    {
      if(a.firstName < b.nickName) {return -1}
      if(a.firstName > b.nickName) {return 1}
    }else{
      if(a.firstName < b.firstName) {return -1}
      if(a.firstName > b.firstName) {return 1}
    }
    
    return 0;

  })
  console.log(data.users)
  return [...data.users].sort((a,b) =>{
    if(a.nickName != "" && b.nickName != "")
    {
      if(a.nickName < b.nickName) {return -1}
      if(a.nickName > b.nickName) {return 1}
    } else
    if(a.nickName != "")
    {
      if(a.nickName < b.firstName) {return -1}
      if(a.nickName > b.firstName) {return 1}

    }else
    if(b.nickName != "")
    {
      if(a.firstName < b.nickName) {return -1}
      if(a.firstName > b.nickName) {return 1}
    }else{
      if(a.firstName < b.firstName) {return -1}
      if(a.firstName > b.firstName) {return 1}
    }
    
    return 0;

  }).map(({userId,firstName,lastName,nickName}) => (
    nickName ? <div>{nickName}</div> : <div>{firstName}</div>
 
  ));
}


function App() {

  return (
    <div className="App">
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations/>
    </div>
  );
}

export default App;
*/}
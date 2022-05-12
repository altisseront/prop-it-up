import './App.css';
import UserComponent from './components/UserComponent';
import React from 'react';
function App() {
  return (
    <div>
      <UserComponent firstName={"Jimmy"} lastName={"Neutron"} hairColor={"brown"} age={'15'}/>
      <UserComponent firstName={"Carl"} lastName={"Wheezer"} hairColor={"Orange"} age={'15'}/>
      <UserComponent firstName={"Sheen"} lastName={"something"} hairColor={"black"} age={'15'}/>
      <UserComponent firstName={"Jane"} lastName={"Dough"} hairColor={"brown"} age={'15'}/>
    </div>
  );
}

export default App;

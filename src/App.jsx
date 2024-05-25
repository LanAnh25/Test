import React from "react";


export const userData = {
  firstName: "Ronan", // feel free to replace the name value
  lastName: "Ogor", // feel free to replace the name value
  title: "PN React JS Killer", // feel free to replace the title value
};


export function User({ firstName, lastName, title }) {
  return (
    <div id="user" data-testid="user">
      <h2>{firstName} {lastName}</h2>
      <p>{title}</p>
    </div>
  );
}


function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      {/* Pass userData as props to the User component */}
      <User {...userData} />
    </div>
  );
}

export default App;

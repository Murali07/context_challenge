import React, { useState, createContext, useContext} from "react";
import "./App.css";


const themCtx = createContext()

export default function App() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "black" : "white"
  };
  return (
    <themCtx.Provider value={[mode, setMode]}>    
      <div style={styles} className="App">
        <List setMode={setMode} mode={mode} />
      </div>
    </themCtx.Provider>
  );
}

//End Goal
const List = () => (
  <ul>
    <ListItem value="light" />
    <ListItem value="dark" />
  </ul>
);

//End Goal
const ListItem = ({ value}) => (
  <li>
    <Button value={value}  />
  </li>
);

const Button = ({ value}) => {
  // subscribe
  const[mode, setMode] = useContext(themCtx)
  
  const styles = {
    background: mode === "light" ? "white" : "black",
    color: mode === "light" ? "black" : "white"
  };

  return (
  <button 
    style={styles}
    onClick={() => setMode(value === "light" ? "light" : "dark")}
  >
    {value}
  </button>
  );
};

// Task (Don't delete or edit components)
// 1. Complete with props drilling - 15mins
// 2. Complete with useContext (avoiding props drilling)

// Reference - https://codesandbox.io/s/usecontext-reference-hw839?file=/src/index.js:165-178
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
// 3. Subscriber - useContext - useContext(context)

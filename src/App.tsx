import React,{useState} from "react";
import "./App.css";
import './index.css';
import Header from "./component/header";
import AuthInputs from "./component/auth";

function App() {

  return (
    <>
   <Header/>
   <main>
        <AuthInputs />
      </main>
    </>
    
  );
}

export default App;

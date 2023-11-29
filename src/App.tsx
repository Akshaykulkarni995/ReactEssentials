import React,{useState} from "react";
import "./App.css";
import Header from "./components/header/header";
import UserInput from "./components/userInputs/userInput";
import { Results } from "./components/results/results";

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturns:6,
    duration:10
});

const handleChange= (inputIdentifier : any,newValue : any) => {
    setUserInput((prev)=>{
        return {...prev,[inputIdentifier]: +newValue};
    });
}
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChangeInput={handleChange} />
    <Results inputs={userInput}/>
    </>
    
  );
}

export default App;

import React,{useState} from "react";

const UserInput = ({onChangeInput,userInput}:any) => {
    
  return (
    <section id="user-input">
      <div className="input-group ">
        <p>
          <label>Initial investment</label>
          <input type="number" required value={userInput.initialInvestment}
          onChange={(event) => onChangeInput('initialInvestment',event.target.value)}/>
        </p>
        <p>
          <label>Annual investment</label>
          <input type="number" required  value={userInput.annualInvestment}
          onChange={(event) => onChangeInput('annualInvestment',event.target.value)}/>
        </p>
      </div>
      <div className="input-group ">
        <p>
          <label>Expected return</label>
          <input type="number" required value={userInput.expectedReturns}
          onChange={(event) => onChangeInput('expectedReturns',event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required  value={userInput.duration}
          onChange={(event) => onChangeInput('duration',event.target.value)}/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;

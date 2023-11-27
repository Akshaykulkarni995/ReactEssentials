import React from "react";
import "./App.css";
import Header from "./components/header/header";
import CoreconceptItem from "./components/coreconcepts/coreconceptItem";
import TabComponentItem from "./components/tabcomponents/tabComponentItem";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CoreconceptItem />
      <TabComponentItem />
    </React.Fragment>
  );
}

export default App;

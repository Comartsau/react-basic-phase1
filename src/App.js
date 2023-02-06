
import FormComponent from "./components/FormComponent";

import Transaction from "./components/Transaction";

import DataContext from "./data/DataContext";

import { useState } from "react";

import ReportComponent from "./components/ReportComponent";


import "./App.css"

function App() {

  
const [ items,setItem ] = useState([])

const onAddNewItem = (newItem) => {
  setItem((prvItems)=>{
    return [newItem,...prvItems]
  })
}

  return (

    <DataContext.Provider value={"Comartsau"}>
    <div className="container">

    <h1 style={{color:"red",fontFamily:"'Prompt', sans-serif"}}> โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
    <ReportComponent/>
    <FormComponent onAddItem = {onAddNewItem}/> 
    <Transaction obj = {items}/>
  
    </div>
    </DataContext.Provider>
  )
}

export default App


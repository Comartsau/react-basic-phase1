
import FormComponent from "./components/FormComponent";
import Transaction from "./components/Transaction";
import DataContext from "./data/DataContext";
import { useState,useEffect } from "react";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter ,Routes,Link,Route} from "react-router-dom"
// import { element } from "prop-types";
import "./App.css"
import { element } from "prop-types";

function App() {
  
  const onAddNewItem = (newItem) => {
    setItem((prvItems)=>{
      return [newItem,...prvItems]
    })
  }

  const initState = [
    {id:1, name:"เงินเดือน", cost: 25000},
    {id:2, name:"ค่าเดิอนทาง", cost: -1500},
    {id:3, name:"ค่าขนม", cost: -300},
    // {id:4, name:"ขายของ", cost: 1500},
    // {id:5, name:"ค่าประกัน", cost: -5000},
  ]

  const [ items,setItem ] = useState(initState)
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)
  

  useEffect(()=>{
    const costs = items.map(items=>items.cost)
    const income = costs.filter(element=>element>0).reduce((total,element)=>total+element,0)
    const expense = (costs.filter(element=>element<0).reduce((total,element)=>total+element,0))*-1
    setIncome(income)
    setExpense(expense)
  },[items,income,expense])
  
  // ------  dispatch ------------------

  // const [showReport,setShowReport] = useState(false)

  // const reducer = (state,action)=>{
  //   switch(action.type) {
  //     case "SHOW" :
  //       return setShowReport(true)
  //     case "HIDE" :
  //       return setShowReport(false)
  //   }
  // }


  // const [result,dispatch] = useReducer(reducer,showReport)


  return (

    <DataContext.Provider value={{income : income,expense: expense}}>
    
    <div className="container">
    <h1 style={{color:"red",fontFamily:"'Prompt', sans-serif"}}> โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
    <BrowserRouter>
    <div>
      <ul className="horizontal-menu">
        <li>
          <Link to="/">ข้อมูลบัญชี</Link>
        </li>
        <li>
          <Link to="/insert">บันทึกข้อมูล</Link>
        </li>
      </ul>
      <Routes>
       <Route path="/" element={<ReportComponent/>}/>
      
       <Route path="/insert" element={
        <div>
          <FormComponent onAddItem = {onAddNewItem}/>
          <Transaction obj = {items}/>
        </div>}>
       </Route>
      </Routes>
    </div>
    </BrowserRouter>
    {/* {showReport && <ReportComponent/>} */}

    {/* <h1>{result}</h1> */}
    {/* <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button> */}
    {/* <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button> */}
    
    </div>
    </DataContext.Provider>
    
  )
}

export default App


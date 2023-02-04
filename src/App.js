import Transaction from "./components/transaction"

import "./App.css"




function App() {
  return (
    <div className="container">

    <h1 style={{color:"red",fontFamily:"'Prompt', sans-serif"}}> โปรแกรมบัญชีรายรับ - รายจ่าย</h1>

    <Transaction/>

    </div>
  );
}

export default App


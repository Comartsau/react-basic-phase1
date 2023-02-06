import "../css/FormComponent.css"
import { useState, useEffect } from "react"

import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props) => {
    const [name,setName] = useState('')
    const [cost,setCost] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputName = (event) => {
        setName(event.target.value)
    }
    const inputCost = (event) => {
        setCost(event.target.value)
    }
    const saveData = (event) => {
        event.preventDefault();
        const data = {
            id: uuidv4(),
            name:name,
            cost:Number(cost)
        }
        setName('')
        setCost(0)
        props.onAddItem(data)
        
    }

    useEffect(()=> {

        const checkData = cost !== 0 && name.trim().length > 0
        setFormValid(checkData)


        // if (cost !== 0 && name !== '') {
        //     setFormValid(true)
        // } else {

        //     setFormValid(false)
        // }
        
    },[name,cost])



    return ( 
        <div>
            <form onSubmit={saveData}>
                <div className="form-control">
                    <label>ชื่อรายการ : </label>
                    <input type="text" placeholder="ระบุรายการของคุณ"  onChange={inputName} value={name}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน : </label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputCost} value={cost} ></input>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>

        </div>

    )
}

export default FormComponent
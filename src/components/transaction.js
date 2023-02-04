import Item from "./Item"
import "../css/transaction.css"

import { v4 as uuidv4 } from 'uuid';

const transaction = () => {
    const obj = [
        { name: "ค่าเดินทาง", cost: 5000 },
        { name: "ค่าเช่าบ้าน", cost: 25000 },
        { name: "ค่าอินเตอร์เน็ต", cost: 500 },
        { name: "ค่าน้ำ-ไฟ", cost: 3000 },
        { name: "เงินออม", cost: 7000 },
        { name: "ค่าเดินทาง", cost: 800}
    ]
    return (
        <ul className="transaction-list" >
            {obj.map((ele) =>{
                return <Item name={ele.name} cost={ele.cost} key={uuidv4()}/>
            })}
        </ul>
    ) 

}

export default transaction
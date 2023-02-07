import Item from "./Item"
import "../css/transaction.css"

const Transaction = (props) => {
    const {obj} = props

    return (
        <div>
            <ul className="transaction-list" >
                {obj.map((ele) =>{
                return <Item name={ele.name} cost={ele.cost} key={ele.id}/>
                })}
            </ul>

        </div>
    ) 

}

export default Transaction
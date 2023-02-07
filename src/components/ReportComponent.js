
import { useContext } from "react"

import DataContext from "../data/DataContext"

import "../css/ReportComponent.css"

const ReportComponent = () =>{

    const {income,expense} = useContext(DataContext)
    return (
        <div>
            {/* <DataContext.Consumer>
            {context => <p>รายรับ :{context.income}<br/> รายจ่าย :{context.expense} </p>  }
            </DataContext.Consumer> */}
            
                <h4>ยอดคงเหลือ: <span>฿ {income - expense} </span></h4>
                <div className="report-container">
                    <div>
                        <h4>รายได้ทั้งหมด</h4>
                        <p className="report plus">฿ {income}</p>
                    </div>
                    <div>
                        <h4>รายจ่ายทั้งหมด</h4>
                        <p className="report minus">฿ {expense}</p>
                    </div>

                </div>
        </div>
    )
} 

export default ReportComponent
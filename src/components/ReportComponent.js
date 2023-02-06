
import { useContext } from "react"

import DataContext from "../data/DataContext"

const ReportComponent = () =>{

    const title = useContext(DataContext)
    return (
        <div>
            <p>สวัสดี : {title}</p>
        </div>
    )
} 

export default ReportComponent
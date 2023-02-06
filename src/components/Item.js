// import React from "react"

import PropTypes from 'prop-types'; 


import "../css/item.css"


const Item = ({name,cost}) => {

    const status = cost < 0 ? "expense"  : "income"
    const symbol = cost < 0 ? "-"  : "+"
    
    return <li className={status} >{name}<span>{symbol } {Math.abs(cost)}</span>

            </li>

}


Item.propTypes={
    name:PropTypes.string.isRequired,
    cost:PropTypes.number.isRequired
}

export default Item



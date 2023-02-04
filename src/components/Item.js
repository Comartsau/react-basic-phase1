// import React from "react"

import PropTypes from 'prop-types'; 


import "../css/transaction.css"


const Item = ({name,cost}) => {
    
    return <li className="transaction-li" >{name}<span>{cost}</span></li>

    }

Item.propTypes={
    name:PropTypes.string.isRequired,
    cost:PropTypes.number.isRequired
}

export default Item



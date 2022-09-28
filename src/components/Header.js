import React from 'react'
import {useSelector} from 'react-redux'
import "./header.css"
import moment from 'moment/moment'

function Header() {
  
  const { nasa } = useSelector(state => state.data)
  
  return (
    <div className="header-main">
       <div className="header-top">
        <p><span>NASA:</span>Picture of the day</p>
        <p>{moment(nasa?.date).format('LL')}</p>
       </div>
       
    </div>
  )
}

export default Header
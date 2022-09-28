import React,{useEffect} from 'react';
import "./home.css"
import {useDispatch, useSelector} from 'react-redux'
import { getNasa,getImdb } from '../slices/apiCalls'

function Home() {
  const dispatch = useDispatch()
   
  const { nasa } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getNasa())
    dispatch(getImdb())
  }, [])

  console.log(nasa)
  
  return (
    <div>Home</div>
  )
}

export default Home
import React,{useEffect} from 'react';
import "./home.css"
import {useDispatch, useSelector} from 'react-redux'
import { getNasa,getImdb } from '../slices/apiCalls'
import Header from '../components/Header';

function Home() {
  const dispatch = useDispatch()
   
  const { nasa } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getNasa())
    dispatch(getImdb())
  }, [])

  console.log(nasa.hdurl)
  
  return (
    <div>
      <Header/>
      <img src={nasa?.hdurl} alt="" height="50%"/>
    </div>
  )
}

export default Home
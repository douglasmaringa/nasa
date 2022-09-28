import React,{useEffect} from 'react';
import "./home.css"
import {useDispatch, useSelector} from 'react-redux'
import { getNasa,getImdb } from '../slices/apiCalls'
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  const dispatch = useDispatch()
   
  const { nasa,imdb } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getNasa())
    dispatch(getImdb())
  }, [])

  console.log(nasa.hdurl)
  
  return (
    <div>
      <Header/>
      <img src={nasa?.hdurl} alt="" height="50%" width="100%"/>

      <div className="cards">
        {
          imdb?.results?.map((e)=>(
            <Card data={e}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home
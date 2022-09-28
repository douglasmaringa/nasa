import React,{useEffect} from 'react';
import "./details.css"
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getById } from '../slices/apiCalls'


function Details() {
    const {state} = useLocation();
    const dispatch = useDispatch()
   
  const { single } = useSelector(state => state.data)

  useEffect(() => {
    if(state){
      dispatch(getById({id:state}))
    }
    
  }, [dispatch,state])

  console.log(single)

  return (
    <div className="details">
      
        <img src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt="" />
        <h1>{single?.original_title}</h1>
        <p><span>Tagline :</span><br/>{single?.tagline }</p>
        <p><span>Overview:</span>{single?.overview}</p>
        <p><span>Vote average:</span>{single?.vote_average}</p>
        <p><span>Total Votes:</span>{single?.vote_count}</p>
        <p><span>Status:</span>{single?.status}</p>
        <p><span>IMDB Link:</span><a href={`https://www.imdb.com/title/${single?.imdb_id}/`} target="_blank" rel="noopener noreferrer">{single?.imdb_id}</a></p>
        <p><span>Budget:</span>{single?.budget}</p>
        <p><span>Production Countries:</span></p>
        {
          single?.production_countries?.map((e)=>(
            <ul>
               <li key={e.name}>{e.name}</li>
            </ul>
          ))
        }

        <p><span>Genres:</span></p>
        {
          single?.genres?.map((e)=>(
            <ul>
               <li key={e.id}>{e.name}</li>
            </ul>
          ))
        }

        <p><span>Languages:</span></p>
        {
          single?.spoken_languages?.map((e)=>(
            <ul>
               <li key={e.english_name}>{e.english_name}</li>
            </ul>
          ))
        }
        
    </div>
  )
}

export default Details
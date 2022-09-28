import React from 'react'
import "./details.css"
import {useLocation} from 'react-router-dom';


function Details() {
    const {state} = useLocation();

    console.log(state)
  return (
    <div className="details">
        <img src={`https://image.tmdb.org/t/p/original${state?.poster_path}`} alt="" />
        <h1>{state?.original_title}</h1>
        <p><span>Overview:</span><br/>{state?.overview}</p>
        <p><span>Vote average:</span><br/>{state?.vote_average}</p>
        <p><span>Total Votes:</span><br/>{state?.vote_count}</p>
        <p><span>Status:</span><br/>Released</p>
    </div>
  )
}

export default Details
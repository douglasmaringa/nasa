import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom';

function Card({data}) {
  const navigate = useNavigate();
   
   //open details page
  const details=()=>{
    navigate('/details', { state: data.id});
   }

  return (
    <div onClick={()=>{details()}} className="card">
        {
          data.poster_path?(<>
              <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="" />
          </>):(<>
            <img src={`https://png.pngtree.com/png-vector/20210604/ourlarge/pngtree-gray-network-placeholder-png-image_3416659.jpg`} alt="" />
          </>)
        }
        <h1>{data?.original_title}</h1>
        <p><span>Description:</span><br/>{data?.overview}</p>
        <p className="card-btm">Popularity:<span>{data?.popularity}</span></p>
        <p className="card-btm">Realease date:<span>{data?.release_date}</span></p>
    </div>
  )
}

export default Card
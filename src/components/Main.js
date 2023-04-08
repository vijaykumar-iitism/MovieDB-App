import React,{useEffect, useState} from 'react'
import './Main.css';
import image from '/home/comp/Desktop/Webd/Insynk/insynk/src/assets/best6.jpg'
import Modal from './Modal';

function Main() {
// important URLs
const API_KEY = "api_key=6e16a5d151e300aff30ce69dfc770cef";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL+ "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&"+API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";


// using usestate hook to load the movies into an object 
const [movies,setMovies] = useState([]);

const getMovies = async() => {
const res = await fetch(API_URL);
const data = await res.json();

setMovies(data.results);
console.log(movies);
}

useEffect(() => {
    getMovies();
},[]);

//using usestate hooks to maintain the state of modal and load the data onclick to temp array
const [modal,setModal] = useState(false);
const [temp,setTemp] = useState([]);

const getData = (release_date,
    title,poster_path,overview
    ,vote_average,vote_count) => {

    let Temp =[release_date,title,poster_path,overview,vote_average,vote_count];
    setTemp( item =>  [1,...Temp])
    console.log(temp);
    return setModal(true);
}

  return (
   <>
    <div className="title">
        <h3>Most Recent Movies</h3>
    </div>

    <main id="main">

       {
        movies.map((movie,index) => {

            return (
                <>
                <div className="movie" key={movie.id} onClick={() => getData(movie.release_date,
                            movie.title,movie.poster_path,movie.overview
                            ,movie.vote_average, movie.vote_count)}>
                    <div className="movie-image">
                        <img src={IMG_URL + movie.poster_path} alt="Image"/>
                    </div>
                    <div className="movie-rating">
                        <span>{movie.vote_average}</span> 
                    </div>
                    <div className="movie-name" >
                        <span>{movie.title}</span>
                    </div>
                </div>
                
                </>
            )
        })
       } 
    
   </main>
   {
    modal === true? <Modal release_date={temp[1]}
    title={temp[2]} poster_path={temp[3]} overview={temp[4]}
    vote_average={temp[5]} vote_count={temp[6]} hide={()=> setModal(false)}/> : ''
   }
   </>
  )
}

export default Main

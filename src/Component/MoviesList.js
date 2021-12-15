import MovieCard from "./MovieCard"
import '../App.css';

function MoviesList({moviedata,handleName}){
    return( 
        <div className='container'>
            {moviedata.map((el,i)=><MovieCard el={el} key={i} handleName={handleName} /> )}
        </div>


    )
}

export default MoviesList
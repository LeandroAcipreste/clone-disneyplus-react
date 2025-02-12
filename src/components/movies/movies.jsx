import '../movies/movies.css'
import React from 'react'

const Movies = () => {
    return (
        <div className='containerMovies'>
            <h4>Recomendado para Você</h4>
            <div className='containerMovies-content'>
                <div className='containerMovies-box'>
                    <img src="../images/simpsons.webp" alt="" className='containerMovies-box-img'/>
                </div>
                <div className='containerMovies-box'>
                    <img src="../images/simpsons.webp" alt="" className='containerMovies-box-img'/>
                </div>
                <div className='containerMovies-box'>
                    <img src="../images/simpsons.webp" alt="" className='containerMovies-box-img'/>
                </div>
                <div className='containerMovies-box'>
                    <img src="../images/simpsons.webp" alt="" className='containerMovies-box-img'/>
                </div>
            </div>
        </div>
    )
}

export default Movies

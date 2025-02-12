import React from 'react';
import '../home/home.css';
import ImgSlider from '../slider/ImgSlider';
import Viewers from '../viewers/viewers'
import Movies from '../movies/movies';

function Home() {
    return (
        <main className='main-home'>


            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </main>
    )
}

export default Home


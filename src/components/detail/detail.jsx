import React from 'react';
import "../detail/detail.css";

function Detail() {
    return (
        <div className='container-detail'>
            <div className='content-detail'>
                <div>
                    <img src="../images/bao.jpg" alt="bao" className='content-detail-background'/>
                </div>
                <div className='content-detail-box'>
                    <img src="../images/bao-logo.png" alt="" className='content-detail-imgTitle'/>
                </div>
                <div className='controls'>
                    <button className="playButton" type='button'>
                        <img src="../images/play-icon-black.png" alt="" />
                        PLAY
                    </button>
                    <button className="trailerButton" type='button'>
                        <img src="../images/play-icon-white.png" alt="" />
                        TRAILER
                    </button>
                    <button className="addButton" type='button'>
                        +
                    </button>
                    <button className="groupWatchButton" type='buton'>
                        <img src="../images/group-icon.png" alt="" />
                    </button>
                </div>
                <div className="subtitle">
                    <p>2018 • 7m • Family, Fantasy, Kids, Animation</p>
                </div>
                <div className="description">
                    <p>Em 'Bao', da Disney e Pixar, uma mãe chinesa que fica triste quando seu filho sai de casa tem outra chance de maternidade quando um de seus bolinhos ganha vida.</p>
                </div>
            </div>
            
        </div>
    )
};

export default Detail;

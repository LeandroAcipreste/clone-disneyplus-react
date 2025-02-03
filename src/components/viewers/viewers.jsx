import React from 'react'
import '../viewers/viewers.css'

function Viewers() {
    return (
        <div className='container'>
            <div className='container-box'>
                <img src="../images/viewers-disney.png" alt="" className='container-box-img'/>
            </div>
            <div className='container-box'>
                <img src="../images/viewers-pixar.png" alt="" className='container-box-img'/>
            </div>
            <div className='container-box'>
                <img src="../images/viewers-marvel.png" alt="" className='container-box-img'/>
            </div>
            <div className='container-box'>
                <img src="../images/viewers-starwars.png" alt="" className='container-box-img'/>
            </div>
            <div className='container-box'>
                <img src="../images/viewers-national.png" alt="" className='container-box-img'/>
            </div>
        </div>
    )
}

export default Viewers

import React from 'react';
import '../login/login.css';

function Login() {

    return (
        <div className='conteiner-login'>
            <div className='content-login'>
                <div className="content-assing">
                    <img src="../images/cta-logo-one.svg" alt="" className='content-logo-one-img'/>
                    <button type='button' className='button-sign-up'>ASSINE AGORA</button>
                    <p className='content-login-description'>
                    O Disney+ oferece filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic. Há dois planos: o Padrão (R$ 43,90/mês) com Full HD e 2 telas simultâneas, e o Premium (R$ 62,90/mês) com 4K, Dolby Atmos e 4 telas. Ambos permitem downloads ilimitados para assistir offline.
                    </p>
                    <img src="../images/cta-logo-two.png" alt="" className='content-logo-two-img'/>
                </div>
            </div>
        </div>
    )
};

export default Login;

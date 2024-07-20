import  React, { useEffect, useState } from 'react';

function AboutMe() {
    return(
        <div className='card'>
            <div>
                <div>
                <img src='https://static.tvtropes.org/pmwiki/pub/images/01_02_4.jpg' alt='Profile pic'></img>
                <h2>Hello world,</h2>
                </div>
                <p>My name is Dan Jones. I started my coding journey making games with Gamemaker all the way back in 2010 and then giving up. I didn't return to coding until 2022 when i started making discord bots and then in 2024 I took a coding bootcamp to further my skills in javascript fullstack MERN web development</p>
                
            </div>
        </div>
    )   
}

export default AboutMe;
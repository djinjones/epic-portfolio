import  React, { useEffect, useState } from 'react';

function Resume() {
    return (
        <div className='card'>
            <h2>
                Resume
                <a
                    href='./src/assets/exampleresume.png' // Path to your resume file
                    download
                    className='resume-link'
                >
                    ⬇️ (download)
                </a>
            </h2>
            <p>
                I am proficent in javascript, html and css. 
            </p>
        </div>
    );
}

export default Resume;
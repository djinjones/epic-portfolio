import  React, { useEffect, useState } from 'react';

function Portfolio() {
    const projects = [
       {
        title: "sudoku",
        link: "https://github.com/djinjones/Sudoku-in-Browser",
        description: "simple in browser sudoku I built outsite of class",
        status: "complete",
        source: "./src/assets/sudoku.png",
       },
       {
        title: "brewquest",
        link: "https://github.com/djinjones/Brewery-Tracker",
        description: "simple app to track breweries across the US based on location",
        status: "complete",
        source: "./src/assets/brewquest.png",
       },
       {
        title: "weather dashboard",
        link: "https://github.com/djinjones/Weather-Dashboard",
        description: "simple app to track the weather in areas specefied by the user",
        status: "complete",
        source: "./src/assets/weather.png",
       },
       {
        title: "svg logo generator",
        link: "https://github.com/djinjones/SVG-logo-maker",
        description: "simple app that runs in the terminal to create 3 letter word svg logos",
        status: "complete",
        source: "./src/assets/svgstar.png",
       },
       {
        title: "Readme Generator",
        link: "https://github.com/djinjones/Readme-Generator",
        description: "simple app that allows users to create readme files using the terminal",
        status: "complete",
        source: "./src/assets/readmegenerator.png",
       },
       {
        title: "Circular polyrythm",
        link: "https://github.com/djinjones/circular-polyrythm",
        description: "simple webstie that allows users to speed up and slow down a polyrythm",
        status: "inProgress",
        source: "./src/assets/circularpolyrythm.png"
       }

    ];

        const generateCard = () => {
            return projects.map((project, index) => (
                <a key={index} className='project-link' href={project.link} target='_blank' rel='noopener noreferrer'>
                    <div className='project-card' style={{ backgroundImage: `url(${project.source})` }}>
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <span className='project-status'>Status: {project.status}</span>
                    </div>
                </a>
            ));
        };

    return(
        <>
            <h2 id='portfolio'>My projects</h2>
                <div className='projects'>
                    {generateCard()}
                </div>
        </>
    )   
}

export default Portfolio;
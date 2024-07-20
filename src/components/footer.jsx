import  React, { useEffect, useState } from 'react';

function Footer() {
    return(
        <div className='footer'>
            <a className='logo-link github' href='https://github.com/djinjones'><img src='./src/assets/github-mark-white.png'></img></a>
            <a className='logo-link linkedin' href='https://www.linkedin.com/in/danieljonesjobstackinc?trk=people-guest_people_search-card'><img src='./src/assets/Linkedin.png'></img></a>
            <a className='logo-link x' href='https://x.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src='./src/assets/X_logo.jpg'></img></a>
        </div>
    )   
}

export default Footer;
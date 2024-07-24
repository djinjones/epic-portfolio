import  React, { useEffect, useState } from 'react';

function Footer() {
    return(
        <div className='footer'>
            <a className='logo-link github' href='https://github.com/djinjones'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img></a>
            <a className='logo-link linkedin' href='https://www.linkedin.com/in/danieljonesjobstackinc?trk=people-guest_people_search-card'><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'></img></a>
            <a className='logo-link x' href='https://x.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src='https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png'></img></a>
        </div>
    )   
}

export default Footer;
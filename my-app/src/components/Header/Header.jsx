import React from 'react';
import './header.css';

function Header() {

    return (
        <div>
            <section>
                <img className="banner" src={require('../../assets/images/SQDPTbannerSM.png').default} />
            </section>
        </div>
    );
}

export default Header;
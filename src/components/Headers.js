import React from 'react';

import '../assets/style/headers.scss';

const Headers = () => {
    return (
        <div className="containers">
            <nav>
                <div className="navigation-logo">
                    <img src="https://src.kioser.com/img/logo.png" alt="" />
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Headers;

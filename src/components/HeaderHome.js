import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import '../assets/style/headers.scss';

const HeaderHome = (props) => {
    const history = useHistory()

    const logOut = () => {
        history.replace("/Login")
    }


    return (
        <div className="containers">
            <nav>
                <div className="navigation-logo">
                    <img src="https://src.kioser.com/img/logo.png" alt="" />
                </div>
                <div className="navigation-menu">
                    {props.data[0].role === "Finance" || props.data[0].role === "Admin" ?
                        <ul>
                            <li><Link to="/Finance"><Button className="btn">Finance</Button></Link></li>
                            <li><Button className="btn" onClick={logOut} >Logout</Button></li>
                        </ul>
                        :
                        <ul>
                            <li><Button className="btn" onClick={logOut} >Logout</Button></li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
    )
}

export default HeaderHome;

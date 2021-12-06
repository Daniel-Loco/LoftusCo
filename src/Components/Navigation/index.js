import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constraints/routes';

// import '../../Styles/Navigation.css';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link id="landing" to={ROUTES.LANDING}>Landing TEST</Link>
                <Link id="home" to={ROUTES.HOME}>Home</Link>
                <Link id="aboutus" to={ROUTES.ABOUTUS}>About Us</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;
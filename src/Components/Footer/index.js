import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constraints/routes';

// import '../../Styles/Footer.css';

const Footer = () => (
    <div>
        <ul>
            <li>
                <Link id="home" to={ROUTES.HOME}>Footer Home</Link>
            </li>
        </ul>
    </div>
);

export default Footer;
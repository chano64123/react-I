import './styles.css'
import { Link } from 'react-router-dom';

const NavButton = ({link, title}) => {
    return (
        <li className='nav-link'>
            <Link to={link}>{title}</Link>
        </li>
    );
}

export default NavButton
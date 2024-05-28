import './styles.css'

const NavButton = ({link, title}) => {
    return (
        <li className='nav-link'>
            <a href={link}>{title}</a>
        </li>
    );
}

export default NavButton
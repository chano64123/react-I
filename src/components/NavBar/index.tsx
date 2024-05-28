import NavButton from '../NavButton';
import './styles.css'
import data from '@/data/options.json'

const NavBar = () => {
    return (
        <div className="nav">
            <ul id="nav">
                {
                    data.nav.map(({linkTo, title}) => <NavButton link={linkTo} title={title}/>)
                }
            </ul>
        </div>
    );
}

export default NavBar
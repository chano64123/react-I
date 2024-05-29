import './styles.css'
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo/tiendamia-logo.svg'
import NavBar from '../NavBar';
import Social from '../Social';

const Header = ({ showFilter = false }) => {
    return (
        <header>
            <div className="container">
                <div className="search">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="218" alt="Logo tiendamia" />
                        </Link>
                    </div>
                    {
                        showFilter &&
                            <div className="form">
                                <form action="">
                                    <input id="inputSearch" type="text" placeholder="Search" />
                                </form>
                            </div>
                    }
                    <Social />
                </div>
                <NavBar />
            </div>
        </header>
    );
}

export default Header
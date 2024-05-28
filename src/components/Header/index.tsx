import logo from '../../../public/images/logo/tiendamia-logo.svg'
import NavBar from '../NavBar';
import Social from '../Social';
import './styles.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="search">
                    <div className="logo">
                        <a href="index.html">
                            <img src={logo} width="218" alt="Logo tiendamia" />
                        </a>
                    </div>
                    <div className="form">
                        <form action="">
                            <input id="inputSearch" type="text" placeholder="Search" />
                        </form>
                    </div>
                    <Social/>
                </div>
                <NavBar />
            </div>
        </header>
    );
}

export default Header
import './styles.css'
import { Link } from 'react-router-dom';

const FooterOption = ({ options }) => {
    return (
        <div className="col">
            <ul>
                {
                    options.map(({ title, isPrincipal, linkTo }) => (
                        <li className={isPrincipal ? "col-main-item" : ""}>
                            <Link to={linkTo}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterOption
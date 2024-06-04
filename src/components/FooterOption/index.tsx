import './styles.css'
import { Link } from 'react-router-dom';

const FooterOption = ({ options }) => {
    return (
        <div className="col">
            <ul>
                {
                    options.map(({ id, title, isPrincipal, linkTo }) => (
                        <li key={id} className={isPrincipal ? "col-main-item" : ""}>
                            <Link to={linkTo}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterOption
import './styles.css'
import { Link } from 'react-router-dom';
import data from '@/data/options.json'

const Social = () => {
    return (
        <div className="social">
            <ul id="social">
                {
                    data.social.map(({ iconClass, linkTo }) => (
                        <li>
                            <Link to={linkTo}><i className={iconClass}></i></Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Social
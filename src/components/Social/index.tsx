import './styles.css'
import data from '@/data/options.json'

const Social = () => {
    return (
        <div className="social">
            <ul id="social">
                {
                    data.social.map(({ iconClass, linkTo }) => (
                        <li>
                            <a href={linkTo}><i className={iconClass}></i></a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Social
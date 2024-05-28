import './styles.css'
import data from '@/data/options.json'
import FooterOption from '../FooterOption';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="columns-container" id="footer">
                    {
                        data.footer.options.map(option => <FooterOption options={option}/>)
                    }
                </div>
                <div className="copyright">{data.footer.text}</div>
            </div>
        </footer>
    );
}

export default Footer
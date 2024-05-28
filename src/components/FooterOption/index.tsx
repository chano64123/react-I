import './styles.css'

const FooterOption = ({ options }) => {
    return (
        <div className="col">
            <ul>
                {
                    options.map(({ title, isPrincipal, linkTo }) => (
                        <li className={isPrincipal ? "col-main-item" : ""}>
                            <a href={linkTo}>{title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterOption
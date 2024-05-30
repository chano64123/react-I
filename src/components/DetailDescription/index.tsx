import './styles.css'

const DetailDescription = ({product}) => {
    return (
        <>
            <h1 className="title">{product.title}</h1>
            <form className="selector">
                <fieldset>
                    <label className="label" htmlFor="color">Color</label>
                    <select id="color">
                        {
                            product.colors.map(color => (<option value={color}>{color}</option>))
                        }
                    </select>
                </fieldset>
            </form>
            <p className="description">{product.description}</p>
        </>
    );
}

export default DetailDescription
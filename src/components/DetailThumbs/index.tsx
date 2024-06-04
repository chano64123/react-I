import './styles.css'

const DetailThumbs = ({ product }) => {
    return (
        <>
            {
                product.images.map((image, index) => (
                    <div key={index} className="thumbnail-container"><img src={image} alt={`miniatura ${index + 1}`} /></div>
                ))
            }
            <img id="main-image" className="main-image" src={product.images[0]} alt="imagen principal" />
        </>

    );
}

export default DetailThumbs
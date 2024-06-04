import './styles.css'
import defaultThumb from '/public/images/products/mock1.jpg'
import { useEffect, useState } from 'react';

const DetailThumbs = ({ product }) => {
    const [thumb, setThumb] = useState(product.images[0] || defaultThumb);
    useEffect(() => {
        setThumb(product.images[0] || defaultThumb);
        console.log("cambio de imagen");
    }, [product])
    return (
        <>
            {
                product.images.map((image, index) => (
                    <div key={index} className="thumbnail-container">
                        <img
                            src={image}
                            alt={`miniatura ${product.title}`}
                            onClick={() => setThumb(image)}
                        />
                    </div>
                ))
            }
            <img
                className="main-image"
                src={thumb}
                alt={product.tutle}
            />
        </>
    );
}

export default DetailThumbs
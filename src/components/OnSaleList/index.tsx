import './styles.css'
import OnSaleCard from '../OnSaleCard';
import { ProductUtils } from '@/utils/ProductUtils';
import { useEffect, useState } from 'react';

const OnSaleList = ({ pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isPosiblePrevPage, setIsPosiblePrevPage] = useState(true);
    const [isPosibleNextPage, setIsPosibleNextPage] = useState(true);

    const products = ProductUtils.getPaginatedProductsOnSale(pageSize, currentPage);
    const quantityPages = ProductUtils.getQuantityOfPagesOnSale(pageSize);
        
    useEffect(() => {
        setIsPosiblePrevPage(currentPage > 1)
        setIsPosibleNextPage(currentPage < quantityPages)
    }, [currentPage, quantityPages]);

    const previousPage = () => {
        if (isPosiblePrevPage) {
            setCurrentPage(currentPage-1)
        }
    }

    const nextPage = () => {
        if (isPosibleNextPage) {
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <main>
            <div className="container">
                <div className="product-on-sale-container">
                    {
                        products.map(product => <OnSaleCard key={product.id} product={product} />)
                    }
                </div>
                <div className="buttons-container">
                    <button
                        type="button"
                        className="btn btn-arrow"
                        disabled = {!isPosiblePrevPage}
                        onClick={previousPage}>
                        <i className="fa-solid fa-left-long"></i>
                    </button>
                    {currentPage}/{quantityPages}
                    <button
                        type="button"
                        className="btn btn-arrow"
                        disabled = {!isPosibleNextPage}
                        onClick={nextPage}>
                        <i className="fa-solid fa-right-long"></i>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default OnSaleList
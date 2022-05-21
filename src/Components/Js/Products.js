import useProducts from './UseProducts';
import './../Css/Products.css';
import './Product';
const Products = () => {
    const [Products] = useProducts();
    return (
        <div className='bg-black'>
            <h2 className='text-primary text-center m-4'>AVAILABLE BIKES</h2>
            <div className='products'>
                {
                    Products?.map(Product => <Product
                        key={Product._id}
                        Product={Product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
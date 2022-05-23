import { useEffect, useState } from 'react';

const useProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://calm-lake-89877.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems];
};

export default useProducts;
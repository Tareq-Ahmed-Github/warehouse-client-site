import React, { useEffect, useState } from 'react';

const Products = () => {
const [items, setItems] = useState([]);
useEffect(() => {
    fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data))
}, []);

    return (
        <div>
            <h2>{items?.length}</h2>
        </div>
    );
};

export default Products;
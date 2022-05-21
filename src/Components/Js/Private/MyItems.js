import React, { useEffect, useState } from 'react';
import AddItem from './AddItem';

const MyItems = () => {
    const [addItem, setAddItem] = useState([])
    useEffect(() => {
        fetch('items.json/order')
            .then(res => res.json())
            .then(data => setAddItem(data))
    }, [])

    return (
        <div>
            <h2 className='text-center m-4'>MY Item</h2>
            <div>
                {
                    addItem?.map(item => <AddItem key={item._id}
                        addItem={item}
                    ></AddItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;
import React, { useEffect, useState } from 'react';

const Receipts = () => {
    const [allReceipts, setAllReceipts] = useState([]);

    const fetchReceipts = () =>{
        
    };

    useEffect(()=>{
        fetchReceipts();
    },[])
    return (
        <div>
            <h1>This is the Receipts Page</h1>
        </div>
    );
};

export default Receipts;
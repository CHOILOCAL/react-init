import React, { useEffect } from 'react';
import axios from 'axios';


const MakeProduct = () => {

    useEffect(() => {
        axios.get('/api/hello').then((response) => {
            console.log(response);
        });
    }, [])

    return (
        <div>
            <h1>나만의여행상품만들기</h1>
        </div>
    );
};

export default MakeProduct;
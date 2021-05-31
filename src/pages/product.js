import React from 'react';
import { Link } from 'react-router-dom';
import RouterHookSample from '../sample/RouterHookSample';
import WithRouterSample from '../sample/WithRouterSample';

const productDate = {
    1: {
        name: '3박 4일',
        description: '홉스골 + 고비'
    },
    2: {
        name: '4박 5일',
        description: '홉스골 + 고비 + 테를지'
    },
    3: {
        name: '5박 6일',
        description: '홉스골 + 고비 + 테를지 + 차바소바르강'
    }
}
const Product = ({ match }) => {

    const { number } = match.params;
    const product = productDate[number];

    if (!product) {
        return <div>존재하지 않는 상품입니다. 
            <h3>목록</h3>
            <ul>
                <li>
                    <Link to="/product/1">2박 3일</Link>
                    </li>
                <li>
                    <Link to="/product/2">3박 4일</Link>
                </li>
                <li>
                    <Link to="/product/3">3박 4일</Link>
                </li>
            </ul>

            <WithRouterSample />
            <RouterHookSample />
        </div>
    }

    return (
        <div>
            
            <h1>여행상품</h1>
            <h3>{number}({product.name})</h3>
            <p>{product.description}</p>

        </div>
    );
};

export default Product;
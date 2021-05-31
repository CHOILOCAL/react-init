import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" activeStyle={{ background: 'red', color: 'black' }}>홈</NavLink>
                </li>
                <li>
                    <Link to="/aboutDamdeeng">담딩투어 소개</Link>
                </li>
                <li>
                    <Link to="/product">여행상품</Link>
                </li>
                <li>
                    <Link to="/makeproduct">나만의여행상품만들기</Link>
                </li>
                <li>
                    <Link to="/review">리뷰</Link>
                </li>
                <li>
                    <Link to="/qna">문의</Link>
                </li>
                <li>
                    <Link to="/withme">동행구하기</Link>
                </li>
                <li>
                    <Link to="/sns">담딩 SNS</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
                <li>
                    <Link to="/Bootstrap">BootstrapSample</Link>
                </li>
                <li>
                    <Link to="/d3">D3Sample</Link>
                </li>
                <li>
                    <Link to="/icon">IconMeterialSample</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
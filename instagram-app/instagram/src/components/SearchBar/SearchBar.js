import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
border-bottom: 1px solid #3333;
height: 60px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
`;


// const Nav = styled.div`
//     margin-top: 8px;
//     display: flex;
//     text-align: right;
// `;

const Input = styled.input`
    text-align: center;
    top: 20px;
`;

const Image = styled.img`
    width: 90px;
    height: 35px;
`;

const NavSearch = styled.div`
    border: 1px solid red;
    left: 295px;
    top: 1px;
`;

const SearchBar = props => {
    return (
        <Search className='searchBar'>
            <i className="fab fa-instagram"></i>
            <div className='instagram'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram' />
            </div>
            <NavSearch className='bar'>
                <Input type='test' className='search-input' placeholder='Search' />
            </NavSearch>
            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <button className='user'><i className="far fa-user" ></i></button>
            </div>
        </Search>
    )
}

export default SearchBar;
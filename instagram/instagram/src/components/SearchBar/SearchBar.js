import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const Searchbar = styled.div`
border-bottom: 1px solid #3333;
height: 60px;
line-height: 70px;
display: flex;
justify-content: space-between;
background: #ffffff;
`;


const Nav = styled.div`
    margin-top: 8px;
    display: flex;
    text-align: right;
`;

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
        <Searchbar className='searchBar'>
            <Icon.Instagram />
            <div className='instagram'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram' />
            </div>
            <NavSearch className='bar'>
                <Input type='test' className='search-input' placeholder='Search' />
            </NavSearch>
            <Nav>
                <Icon.Compass />
                <Icon.Heart />
                <Icon.MessageCircle />
            </Nav>
        </Searchbar>
    )
}

export default SearchBar;
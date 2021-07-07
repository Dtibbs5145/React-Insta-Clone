import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostContainer = styled.div`
display: flex;
justify-content: space-between;
height: 664px;
border: 3px solid green;
margin-left: 102px; 
width: 600px;
`;

const PostContainer = props => {
    return (
        <div>
            {props.postData.map((post, i) => {
                return (
                    <PostContainer className='postContainer' key={i}>
                        <Post post={post} />
                    </PostContainer >
                )
            })}
        </div>
    )
}

export default PostContainer;
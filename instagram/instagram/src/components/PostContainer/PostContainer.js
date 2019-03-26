import React from 'react';
import Post from './Post';
import './PostContainer.css';
import styled from 'styled-components';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map((post, i) => {
                return (
                    <PContainer className='postContainer' key={i}>
                      <Post post={post} />
                    </PContainer >
                )
            })}
        </div>
    )
}

export default PostContainer;
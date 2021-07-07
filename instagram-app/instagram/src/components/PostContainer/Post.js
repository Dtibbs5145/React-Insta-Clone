import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const UserInfo = styled.div`
border: 1px solid red;
width: 100px;
height:30px;
`;

const UserInfoH3 = styled.h3`
font-size: 17px;
margin-left: 10px;
`;

const UserInfoImg = styled.img`
width: 35px;
height: 35px;
margin-left: 17px;
margin-top: 18px;
border-radius: 44%;
`;
 
const PostImage = styled.img`
margin-top: 64px;
width: 600px;
height: 600px;
justify-content: space-between;
`;


const Post = props => {
    return (
        <div className='posts'>
            <UserInfo className='opUserInfo'>
                <UserInfoImg src={props.post.thumbnailUrl} alt='thumbnail' />
                <UserInfoH3>{props.post.username}</UserInfoH3>
            </UserInfo>
            <div>
            <PostImage src={props.post.imageUrl} alt='postImage' />
            </div>
            <div>
                <CommentSection
                    comments={props.post.comments}
                    postId={props.post.imageUrl}
                    likes={props.post.likes}
                />
                <p>{props.post.timestamp}</p>
            </div>
        </div>
    )
}

export default Post;
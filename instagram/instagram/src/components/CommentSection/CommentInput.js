import React from 'react';
import dummyData from './dummy-data';
import styled from 'styled-components';

const CommentText = styled.input`
text-align: left;
padding: 2px;
margin-left: 4px;
`;

const CommentInput = props => {
    return (
        <Form onsubmit={props.submitComment}>
            <CommentText
            type='text'
            value='comment'
            placeholder='Add Comment...'
            onChange={props.changeComment}
            />
        </Form>
    );
};

export default CommentInput;
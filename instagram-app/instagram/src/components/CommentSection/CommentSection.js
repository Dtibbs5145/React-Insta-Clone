import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const User = styled.div`
    font-weight: 500;
    font-size: 14px;
`;

const Comment = styled.div`
    display: flex;
    justify-content: ;
`;

const Text = styled.p`
    text-align: left;
`;

const AddComment = styled.input`
width: 550px;
height: 35px;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            comment: ''
        };
    };

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.comment,
                    username: 'Destiny Tibbitts'
                }
            ],
            comment: ''
        })
    }


    changeHandler = event => {
        console.log(event)
        this.setState({
            comment: event.target.value
        })
      }

    render() {
        console.log(this.state.likes);
        return (
            <User className='comment-section'>
                {this.state.comments.map((comment, index) => {
                    return (
                        <Comment className='comment' key={index}>
                             <p>{comment.username}</p>
                             <Text>{comment.text}</Text>
                        </Comment>
                    )
                })} 

                <form className='form' onSubmit={this.addNewComment} >
                    <AddComment className='addComment'
                        type='text'
                        placeholder={this.state.placeholder}
                        onChange={this.changeHandler}
                        value={this.state.comment}
                    />
                </form>
            </User>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })

    )
}

export default CommentSection;


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const commentSection = styled.div`
font-weight: 300;
font-size: 14px;
`;

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comment,
            comment: ''
        };
    };


    componentWillUnmount() {
        this.setState();
    }

    render() {
        return(
            <commentSection>
                {this.state.comment.map((c, i) => <Comment key='{i}' comment='{c}'/>)}
                <CommentInput
                comment={this.state.comment}

                />
            </commentSection>
        )
    };

}

export default CommentSectionContainer;
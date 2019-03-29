import React from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

class PostPage extends React.Component {
    constructor() {
        super();
        this.state = {
            dummyPosts: [],
            dataSearchResults: []
        };
    }

    componentDidMount() {
        this.setState({ dummyPosts: dummyData });
    }

    searchPosts = e => {
        const dummyPosts = this.state.dummyPost.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post;
            }
        });
        this.setState({ dataSearchResults: dummyPosts });
    };

    render() {
        return (
            <div>
                <SearchBar search={this.searchPosts} />
                <PostContainer post={this.state.dateSearchResults.length > 0
                    ? this.state.dataSearchResults : this.state.dummyPosts} />
            </div>
            );
        }
}

export default PostPage;
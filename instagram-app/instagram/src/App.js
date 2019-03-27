import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './components/CommentSection/Authentication/Authenticate';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  searchBarHandler = event => {
    const posts = this.state.dummyData.filter( post => {
      if (post.username.includes(event.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  
logOut = e => {
  e.preventDefault();
  const user = this.state.username
  localStorage.removeItem('user', user);
  window.location.reload();
}


  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer 
        postData={
          this.state.searchData.length > 0 ?
          this.state.searchData:
          this.state.dummyData}
          />
        <Authenticate />
      </div>
    );
  }
}

export default App;

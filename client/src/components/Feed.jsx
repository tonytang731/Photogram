import React, { Component } from 'react';
import NavBar from './NavBar';
import Post from './Post';
import { getUser } from '../javascripts/userRequests';
import { getUserPosts } from '../javascripts/postRequests';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      data: null,
      isLoading: true,
      posts: [],
    };
  }

  componentDidMount() {
    getUser()
      .then((res) => {
        res.json()
          .then((usr) => {
            const postsToShow = usr.posts;
            usr.followees.forEach((val) => {
              getUserPosts(val)
                .then((arr) => {
                  postsToShow.push(arr);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
            this.setState({ currentUser: usr, posts: postsToShow, isLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoading, posts, currentUser } = this.state;

    const renderPosts = [];

    posts.forEach((id) => {
      renderPosts.push(<Post postid={id} currentUser={currentUser}/>);
    });

    if (isLoading) {
      return (
        <div>
          <NavBar />
          <div className="uk-container uk-container-small">
            <div id="cards" className="uk-child-width-1-2@m uk-align-center uk-background-default">
              LOADING
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <div className="uk-container uk-container-small">
          <div id="cards" className="uk-child-width-1-2@m uk-align-center uk-background-default">
            {renderPosts}
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;

import React, { Component } from "react";
import axios from "axios";

export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchId: "",
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      this.setState({ posts: response.data });
    });
  }
  handleChange = (e) => {
    this.setState({ searchId: e.target.value });
  };

  render() {
    const { posts, searchId } = this.state;
    const filteredPost = posts.filter((post) => post.id === Number(searchId));
    return (
      <div className=" main  justify-center ">
        <input
          type="number"
          placeholder="Enter the id ...."
          onChange={this.handleChange}
        />

        <ul>
          {searchId === "" ? (
            <p>Type an ID to see details...</p>
          ) : filteredPost.length ? (
            filteredPost.map((post) => (
              <li key={post.id}>
                <span>Id :{post.id}</span>
                <h5>Title: {post.title}</h5>
                <p>Body: {post.body}</p>
              </li>
            ))
          ) : (
            <p>No post found!</p>
          )}
        </ul>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react";
import { Routes, NavLink, Route, Link } from "react-router-dom";
import { CustomLink } from "./component/CustomLink";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* <CustomLink to="/"> Home</CustomLink>
      <CustomLink to="/login">Login</CustomLink> */}
      <h2>Our Postes</h2>

      <input type="search" placeholder="Search" id="search" name="search" />

      <button type="submit">Search</button>

      <Link className="link-btn" to="/register">
        <h3>Don't find anythings go to authorization </h3>
      </Link>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={`/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

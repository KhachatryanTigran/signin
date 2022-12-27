import React, { Suspense, useEffect, useState } from "react";

import {
  Link,
  useNavigate,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
  json,
} from "react-router-dom";
import { CustomLink } from "./component/CustomLink";
import useAuth from "./hook/useAuth";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //wariant 1
  // if (!res.ok) {
  //   throw new Response("URL Error!!!", {
  //     status: res.status,
  //     statusText: "My error >>> Not Found >>> URL Error!!! ",
  //   });
  // }
  return res.json();
}
export const loader = async ({ request, params }) => {
  const posts = getPosts();

  if (!(await posts).length) {
    throw json(
      { message: "Not Found", reason: "Wrong URL" },
      {
        status: 404,
        statusText: "My error >>> Not Found >>> URL Error!!! ",
      }
    );
  }

  console.log("posts ", await posts);
  return defer({ posts: getPosts() });
};

const Home = () => {
  const { posts } = useLoaderData();
  // const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 60 : 1;

  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  console.log(searchParams);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;
    const params = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };
  return (
    <div className="home">
      <h2>Home Page </h2>{" "}
      {user ? (
        <>
          <h3>{user}</h3>
          <button
            onClick={() => signout(() => navigate("/login", { replace: true }))}
          >
            Sign Out{" "}
          </button>
        </>
      ) : (
        <Link className="link-btn" to="/login">
          <h3>Didn't find user go to authorization </h3>
        </Link>
      )}
      {/* <CustomLink to="/"> Home</CustomLink>
      <CustomLink to="/login">Login</CustomLink> */}
      <h2>Our Postes</h2>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          id="search"
          name="search"
        />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            name="latest"
          />
          Only new
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={posts}>
            {(resolvedPosts) => (
              <>
                {resolvedPosts
                  .filter(
                    (post) =>
                      post.title.includes(postQuery) && post.id >= startsFrom
                  )
                  .map((post) => (
                    <Link key={post.id} to={`/${post.id}`}>
                      <li type="none">{post.id + ")  " + post.title}</li>
                    </Link>
                  ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

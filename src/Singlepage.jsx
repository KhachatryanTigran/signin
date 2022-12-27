import React, { Suspense, useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  NavLink,
  Route,
  Routes,
  defer,
  useLoaderData,
  Await,
  useAsyncValue,
} from "react-router-dom";
import { EditPost } from "./EditPost";
const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <>
          <h3>{comment.email}</h3>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
};

export const Singlepage = () => {
  // const { id } = useParams();
  // const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { post, id, comments } = useLoaderData();
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <Suspense fallback={<h3>Loading Post...</h3>}>
        <Await resolve={post}>
          <Post></Post>
        </Await>
      </Suspense>
      <Suspense fallback={<h3>Loading Comments...</h3>}>
        <Await resolve={comments}>
          <Comments></Comments>
        </Await>
      </Suspense>

      <NavLink className="link-btn" to={`/${id}/edit`}>
        Edit
      </NavLink>
    </div>
  );
};
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
}
async function getComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return await res.json();
}
export async function postLoader({ params }) {
  const id = params.id;
  return defer({ post: await getPost(id), id, comments: getComments(id) });
}

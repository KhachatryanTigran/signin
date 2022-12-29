import React from "react";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";

export const EditPost = () => {
  const navigation = useNavigation();
  return (
    <Form action="/edit" method="post">
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Body:
        <input type="text" name="body" />
      </label>
      <input type="hidden" name="userId" value="1" />

      <input
        type="submit"
        value="Add post"
        disabled={navigation.state === "submitting"}
      />
    </Form>
  );
};
export const createPost = async ({ title, body, userId }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId }),
  });
  const newPost = await res.json();

  return newPost;
};
export const createPostAction = async ({ request }) => {
  const formData = await request.formData();
  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  };
  const post = await createPost(newPost);

  return redirect("/");
};

import React from "react";
import "./App.css";
import {
  Routes,
  NavLink,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home, { loader } from "./Home";
import { Layout } from "./component/Layout";
import { postLoader, Singlepage } from "./Singlepage";
import { CustomLink } from "./component/CustomLink";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { AboutUs } from "./AboutUs";
import { createPostAction, EditPost } from "./EditPost";
import ErrorPage from "./Error";
import { Createpost } from "./Createpost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={loader}
        errorElement={<ErrorPage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/login-me" element={<Navigate to="/login" replace />} />
      <Route path="/about/*" element={<AboutUs />} />
      <Route
        path="/:id/edit"
        element={
          <RequireAuth>
            <EditPost />{" "}
          </RequireAuth>
        }
        action={createPostAction}
        loader={loader}
      />
      <Route
        path="/:id"
        element={
          <RequireAuth>
            <Singlepage />
          </RequireAuth>
        }
        loader={postLoader}
      />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
        action={createPostAction}
      />
      <Route path="/id" element={<CustomLink to="/id" />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>{" "}
    </>
  );
}

export default App;

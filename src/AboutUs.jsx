import React from "react";
import {
  Routes,
  NavLink,
  Route,
  Navigate,
  Link,
  useMatch,
} from "react-router-dom";
export const AboutUs = () => {
  const question = (
    <div>
      {" "}
      <h2>Answer the following questions</h2>
      <div className="questions">
        <p>
          What Did You Think Was Cool Then, When You Were Young But Isn’t Cool
          Now?
        </p>

        <p>What is the best and worst purchases you’ve ever made?</p>
        <p> How many chickens would it take to kill an elephant?</p>
        <input placeholder="Your answer" type="text" name="answer" />
      </div>
    </div>
  );
  const setActive = ({ isActive }) =>
    isActive ? "active-link " : "not-Active ";
  const match = useMatch({
    path: "/about",
    end: false,
  });

  return (
    <>
      <div className="aboutpage">
        <h1>ACA React Team </h1>
        <p>This is ademo version about page app.</p>
        <NavLink to="about" className={setActive}>
          {" "}
          Contact{" "}
        </NavLink>
        <NavLink to="answerq" className={setActive}>
          {" "}
          Are you ready{" "}
        </NavLink>
        <Routes>
          <Route
            path="about"
            element={
              <>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Linkendi</p>
                <p>Youtube</p>
              </>
            }
          />

          <Route path="answerq" element={<>{question}</>} />
        </Routes>
      </div>
    </>
  );
};

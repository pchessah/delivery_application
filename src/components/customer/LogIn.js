import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div>
      <form className="signup">
        <div className="container signupDiv">
          <br />
          <p>Log In</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style={{ marginBottom: "15px" }}
            />{" "}
            Remember me
          </label>

          <Link to="/customer_signup">
            <p style={{ color: "dodgerblue" }}>
              Don't have an account? Sign Up{" "}
            </p>
          </Link>

          <div class="clearfix">
            <Link to="/">
              <button type="submit" class="signupbtn">
                LogIn
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;

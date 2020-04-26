import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <form className="signup">
        <div className="container signupDiv">
          <br />
          <p>Please fill in this form to create an account.</p>
          <hr />

          <input type="email" placeholder="Enter Email" name="email" required />

          <input
            type="number"
            placeholder="Enter Phone Number"
            name="number"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="psw-repeat"
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

          <Link to="/customer_login">
            <p style={{ color: "dodgerblue" }}>
              Already have an account? Log in{" "}
            </p>
          </Link>

          <div class="clearfix">
            <Link to="/customer_login">
              <button type="submit" class="signupbtn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

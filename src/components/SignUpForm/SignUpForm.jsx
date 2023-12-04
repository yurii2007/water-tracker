import React from "react";

const SignUpForm = () => {
  return (
    <>
      <form>
        <h2>Sign Up</h2>
        <div>
          <input name="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <input name="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input
            name="Repeat password"
            type="Repeat password"
            placeholder="Enter your password"
          />
        </div>
        <button>Sign Up</button>
      </form>
      <link to="/signin">Sign in</link>
    </>
  );
};

export default SignUpForm;

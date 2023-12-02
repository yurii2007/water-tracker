import React from "react";

const SignInForm = () => {
  return (
    <>
      <form>
        <h2>Sign In</h2>
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
        <button>Sign In</button>
      </form>
      <link to="/signup">Sign Up</link>
    </>
  );
};

export default SignInForm;

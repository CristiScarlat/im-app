import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    // Your form validation logic here

    // Reset the input fields after submitting the form
    setUsername("");
    setPassword("");

    // Redirect to the homepage after submitting the form
    router.push("/");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={username}
          onChange={handleUsernameChange}
          name="username"
          placeholder="Username"
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          placeholder="Password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <button type="submit"> Sign Up </button>
      </div>
    </form>
  );
}

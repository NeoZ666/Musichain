import React, { useState } from "react";

export default function UserSignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAdd, setWalletAdd] = useState("");

  return (
    <div>
      <div className="login-page">
        <form>
          <h1>USER SIGNUP</h1>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="walletAdd">Wallet Address</label>
          <input
            type="text"
            name="walletAdd"
            value={walletAdd}
            onChange={(e) => setWalletAdd(e.target.value)}
          ></input>

          

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit">SignUp</button>
        </form>
        <p>
          Already have an account?
          {/* <Link to="/register">Sign up</Link> */}
        </p>
      </div>
    </div>
  );
}

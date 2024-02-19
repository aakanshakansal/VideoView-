import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from ".";
import { useAuth0 } from "@auth0/auth0-react";
// import Login_Signup from "./Login_Signup";

import React from "react";

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      {/* <p>{isAuthenticated && <p>{user.name}</p>}</p> */}
      {isAuthenticated ? (
        <li className="login_username">
        <p>{user.name}</p>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
        </li>
      ) : (
        <li className="login_username">
        <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
      )}
    </Stack>
  );
}

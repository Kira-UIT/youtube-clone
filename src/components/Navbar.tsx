import { Stack } from "@mui/material";
import { logo } from "@utils/constant";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
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
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

import { Stack } from "@mui/material";
import { categories } from "@utils/constant";
import React from "react";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const SidebBar = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: {
          md: "column",
        },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "",
            color: "#fff",
          }}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#FC1503",
              marginRight: "1rem",
            }}
          >
            <category.icon />
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SidebBar;

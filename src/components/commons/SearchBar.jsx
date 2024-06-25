import { TextField } from "@mui/material";

export const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      onChange={handleChange}
      margin="normal"
      sx={{ width: "350px" }}
    />
  );
};

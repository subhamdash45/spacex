import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export const Filters = ({ uniqueYearsList, onFilterChange }) => {
  const [selectedCriteria, setSelectedCriteria] = useState({
    launchStatus: "",
    launchYear: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newCriteria = { ...selectedCriteria, [name]: value };
    setSelectedCriteria(newCriteria);
    onFilterChange(newCriteria);
  };

  return (
    <Box gap={2} mt={2}>
      <FormControl variant="outlined" sx={{ width: "200px" }}>
        <InputLabel id="launch-status-label">Launch Status</InputLabel>
        <Select
          labelId="launch-status-label"
          name="launchStatus"
          value={selectedCriteria.launchStatus}
          onChange={handleChange}
          label="Launch Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="failure">Failure</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{ width: "200px", marginLeft: "16px" }}
      >
        <InputLabel id="launch-year-label">Launch Year</InputLabel>
        <Select
          labelId="launch-year-label"
          name="launchYear"
          value={selectedCriteria.launchYear}
          onChange={handleChange}
          label="Launch Year"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {uniqueYearsList.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

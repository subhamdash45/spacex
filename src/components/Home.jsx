import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress, Typography, Button } from "@mui/material";
import { SearchBar } from "./commons/SearchBar";
import { Filters } from "./commons/Filters";
import { LaunchList } from "./LaunchList";
import { fetchLaunches } from "../store/actions/launchActions";
import "./Home.css";
import { LOG_OUT } from "../types/authActionsType";
import { useNavigate } from "react-router-dom";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { launches, loading, error } = useSelector((state) => state.launches);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({});
  const yearsList = launches.map((launches) => launches.launch_year);
  const uniqueYearsList = [...new Set(yearsList)];

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  const handleSearch = useMemo(
    () =>
      debounce((term) => {
        setSearchTerm(term);
      }, 1000),
    []
  );

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
  };

  const filteredLaunches = useMemo(() => {
    return launches.filter((launch) => {
      const matchesSearch = launch.mission_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        !filterCriteria.launchStatus ||
        (filterCriteria.launchStatus === "success" && launch.launch_success) ||
        (filterCriteria.launchStatus === "failure" && !launch.launch_success);
      const matchesYear =
        !filterCriteria.launchYear ||
        new Date(launch.launch_date_utc).getFullYear() ===
          Number(filterCriteria.launchYear);

      return matchesSearch && matchesStatus && matchesYear;
    });
  }, [launches, searchTerm, filterCriteria]);

  return (
    <Container>
      <div className="homeHeaderContainer">
        <Typography variant="h2" gutterBottom>
          SpaceX
        </Typography>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "50px" }}
          onClick={() => {
            dispatch({ type: LOG_OUT });
            navigate("/login");
          }}
        >
          logout
        </Button>
      </div>

      <div className="filterContainer">
        <SearchBar onSearch={handleSearch} />
        <Filters
          uniqueYearsList={uniqueYearsList}
          onFilterChange={handleFilterChange}
        />
      </div>

      {loading && <CircularProgress />}
      {error && <Typography color="error">Error: {error.message}</Typography>}
      <LaunchList launches={filteredLaunches} />
    </Container>
  );
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

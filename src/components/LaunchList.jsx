import { Grid } from "@mui/material";
import { LaunchItem } from "./LaunchItem";
import "./Home.css";

export const LaunchList = ({ launches }) => (
  <>
    <div className="totalCount">Total Count: {launches.length}</div>
    <Grid container spacing={2}>
      {launches.map((launch, idx) => (
        <Grid item xs={12} sm={6} md={4} key={`${launch.flight_number}-${idx}`}>
          <LaunchItem launch={launch} />
        </Grid>
      ))}
    </Grid>
  </>
);

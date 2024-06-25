import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const LaunchItem = ({ launch }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={launch.links.mission_patch}
      alt={launch.mission_name}
      sx={{ objectFit: "contain" }}
    />
    <CardContent>
      <Typography variant="h5">{launch.mission_name}</Typography>
      <Typography variant="body2" color="textSecondary">
        Launch Date: {new Date(launch.launch_date_local).toLocaleDateString()}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Rocket: {launch.rocket.rocket_name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Launch Site: {launch.launch_site.site_name}
      </Typography>
    </CardContent>
  </Card>
);

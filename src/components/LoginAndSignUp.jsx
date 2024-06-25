import { Container, Button, Typography } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router";

export const LoginAndSignUp = () => {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <div className="loginDetailsContainer">
        <Typography variant="h4" gutterBottom>
          Login/Signup
        </Typography>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "50px" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "50px", marginLeft: "16px" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        </div>
      </div>
    </Container>
  );
};

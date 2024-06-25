import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../store/actions/authActions";
import { Container, TextField, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { INVALID_ERROR } from "../types/authActionsType";

export const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, authenticated, error, registered } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
    if (registered) {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/login");
    }
  }, [authenticated, registered, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameRef.current?.value || !passwordRef.current?.value) return;
    if (location.pathname.includes("login")) {
      dispatch(
        login({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
      );
    } else {
      dispatch(
        signUp({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <Container className="container">
      <div className="loginDetailsContainer">
        <Typography variant="h4" gutterBottom>
          {location.pathname.includes("login") ? `Login` : `Signup`}
        </Typography>
        <form onSubmit={handleSubmit} className="loginDetailsContainer">
          <TextField
            label="Username"
            name="username"
            inputRef={usernameRef}
            margin="normal"
            variant="outlined"
            sx={{ width: "300px" }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            inputRef={passwordRef}
            margin="normal"
            variant="outlined"
            sx={{ width: "300px" }}
          />

          {loading ? (
            <LoadingButton
              loading
              variant="outlined"
              sx={{ width: "50px", height: "40px" }}
            />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "50px" }}
            >
              {location.pathname.includes("login") ? `Login` : `Signup`}
            </Button>
          )}
        </form>
        {error && (
          <Typography>
            {error}
            {!error.includes("username and password doesn't match") && (
              <Link to="/" onClick={() => dispatch({ type: INVALID_ERROR })}>
                click here
              </Link>
            )}
          </Typography>
        )}
      </div>
    </Container>
  );
};

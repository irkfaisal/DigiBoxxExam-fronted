import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import image from "../mepic.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import './Login.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SignIn() {
    const navigate = useNavigate();

    const [passwordMatch, setpasswordMatch] = React.useState(false);
    const [findUser, setFindUser] = React.useState(false);
    const [profile, setProfile] = React.useState("");

    const [values, setValues] = useState({
        email: "",
        password: "",
        profileType: "",
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const LoginData = {
            email: values.email,
            password: values.password,
            profileType: values.profileType
        };
        await axios
            .post(
                `/dashboard/user_feedback/}`,
                LoginData
            )
            .then((response) => {
                if (response.data.errorCode === 200) {
                    alert(response.data.message);
                    setProfile({
                        email: "",
                        password: "",
                        profileType:""
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="container">
                <h1>Welcome to DIGIBOXX</h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
                    <img
                        src="https://digiboxx.com/dist/assets/img/digibox-logo-bluebg.png"
                        alt=""
                        style={{
                            width: "150px",
                            height: "80px",
                            marginRight: "6rem"

                        }}
                    />
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter your Email "
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter your Password "
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                        <span
                            style={{
                                color: "white",
                                cursor: "pointer",
                                display: "block",
                            }}
                            onClick={() => navigate("/ForgotPassword")}
                        >
                            Forgot Password
                        </span>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.profile}
                                label="Profile"
                                onChange={handleChange}
                            >
                                <MenuItem
                                    name="profileType"
                                    value={values.profileType}
                                    onChange={handleChange}>Candidate
                                </MenuItem>
                                <MenuItem name="profileType"
                                    value={values.profileType}
                                    onChange={handleChange}
                                >Recrcuiter</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                    </form>
                </div>

            </div>
        </>
    );
}




{/* <>
<nav id="nav">
    <h5>Welcome to DIGIBOXX</h5>
</nav>
<div className="container-fluid">
    <div className=" row text-center">
        <Collapse in={passwordMatch} sx={{ position: "absolute", right: "0%" }}>
            <Alert
                severity="error"
                variant="filled"
                onClose={() => setpasswordMatch(false)}
            >
                Alert ! password not matched
            </Alert>
        </Collapse>
        <Collapse in={findUser} sx={{ position: "absolute", right: "0%" }}>
            <Alert
                severity="error"
                variant="filled"
                onClose={() => setFindUser(false)}
            >
                User Not Found
            </Alert>
        </Collapse>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs></Grid>

            <Grid item xs={4}>

                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"1rem"}}>
                    <img
                        src="https://digiboxx.com/dist/assets/img/digibox-logo-bluebg.png"
                        alt=""
                        style={{
                            width: "150px",
                            height: "80px",
                            marginRight:"6rem"
                        
                        }}
                    />
                </div>
                <form onSubmit={handleSubmit} style={{marginTop:"1rem"}}>
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your Email "
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your Password "
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    <span
                        style={{
                            color: "white",
                            cursor: "pointer",
                            display: "block",
                        }}
                        onClick={() => navigate("/ForgotPassword")}
                    >
                        Forgot Password
                    </span>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
                <p style={{ margin: "5px auto 60px", color: "white" }}>
                    {" "}
                    Don't have an account ?
                    <Link
                        // onClick={() => {
                        //   sessionStorage.removeItem("confirm");
                        //   sessionStorage.removeItem("verification");
                        // }}
                        className="nav-link"
                        to={"/signin"}
                        style={{ display: "inline-block", color: "black" }}
                    >
                        Sign Up
                    </Link>
                </p>
                <Box sx={{ width: "150px", margin: "auto" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={profile}
                            label="Profile"
                            onChange={handleChange1}
                        >
                            <MenuItem value={10}>Candidate</MenuItem>
                            <MenuItem value={20}>Recrcuiter</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    </div>
</div>
</> */}
import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import image from "../mepic.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import './SignUp.css'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SignUp() {
    const navigate = useNavigate();


    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        profileType: ""
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // const handleChange1 = (event) => {
    //     setProfile(event.target.value);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // setValues(event.target.value);
        const LoginData = {
            email: values.email,
            password: values.password,
            name: values.name,
            profileType: values.profileType
        };
        await axios
            .post(`/login`, { LoginData: LoginData })
        
    };
    return (
        <>
            <nav id="nav">
                <h5>Welcome to DIGIBOXX</h5>
            </nav>
            <div className="container-fluid">
                <div className=" row text-center">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid item xs></Grid>

                        <Grid item xs={4}>

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
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter your name "
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>
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
                                <Box sx={{ width: "200px", margin: "auto", marginTopL: "1rem" }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.profileType}
                                            label="Profile"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={values.profileType}>Candidate</MenuItem>
                                            <MenuItem value={values.profileType}>Recrcuiter</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

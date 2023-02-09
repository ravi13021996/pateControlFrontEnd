import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";

// import { TextField, Button } from "@material-ui/core";

// import { green } from "@material-ui/core/colors";
import { makeStyles } from "@mui/styles"
import { Button, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { put } from "../services/service";
import { addEnquiry, baseURL } from "../config/config";


const FormPage = () => {
    // const classes = useStyles();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [area, setArea] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({
        fullName: "",
        email: "",
        mobile: "",
        area: "",
        message: ""
    });

    const handleSubmit = e => {
        e.preventDefault();

        if (!fullName) {
            setError({ ...error, fullName: "Full Name is required." });
            return;
        }

        if (!email) {
            setError({ ...error, email: "Email is required." });
            return;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError({ ...error, email: "Invalid email address." });
            return;
        }

        if (!mobile) {
            setError({ ...error, mobile: "Mobile is required." });
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            setError({ ...error, mobile: "Invalid mobile number." });
            return;
        }

        if (!area) {
            setError({ ...error, area: "Area is required." });
            return;
        }

        if (!message) {
            setError({ ...error, message: "Message is required." });
            return;
        }

        put(baseURL+addEnquiry,{
            "name":fullName,
            "email":email,
            "number":mobile,
            "message":message,
            "area":area
        })

        console.log("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column",  margin: "auto" ,width:"fit-content", border:"1px solid", padding:"75px", borderRadius:"16px", backgroundColor:"white", opacity:"0.7"}} noValidate>
            <div>
                <TextField
                    id="fullName"
                    label="Full Name"

                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    margin="normal"
                    error={!!error.fullName}
                    helperText={error.fullName}
                />
            </div>

            <div>
                <TextField
                    id="email"
                    label="Email"

                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    margin="normal"
                    error={!!error.email}
                    helperText={error.email}
                />
            </div>

            <div>
                <TextField
                    id="mobile"
                    label="Mobile"

                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    margin="normal"
                    error={!!error.mobile}
                    helperText={error.mobile}
                />
            </div>

            <div>
                <TextField
                    id="area"
                    label="Area"

                    value={area}
                    onChange={e => setArea(e.target.value)}
                    margin="normal"
                    error={!!error.area}
                    helperText={error.area}
                />
            </div>

            <div>
                <TextField
                    id="message"
                    label="Message"

                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    margin="normal"
                    error={!!error.message}
                    helperText={error.message}
                    multiline
                    rowsMax="4"
                />
            </div>

            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"

                >
                    Submit
                </Button>
            </div>


        </form>
    );
};

export default FormPage;
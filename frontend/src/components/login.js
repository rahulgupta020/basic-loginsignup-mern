import { useState } from "react"
import { Button, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap"
import validator from 'validator';
import { BiShow, BiHide } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";
import { Service } from "../providers/service";

const Login = () => {

    const navigate = useNavigate();

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showhideIcon, setShowhideIcon] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value)
        if (validator.isEmail(event.target.value)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
        if (validator.isStrongPassword(event.target.value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPasswordError(false)
        } else {
            setPasswordError(true)
        }
    }
    const handleShowHide = (event) => {
        event.preventDefault();
        setShowhideIcon(!showhideIcon)
    }
    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("Please Enter Details")
        }
        else {
            const payload = { email, password }
            Service.login(payload)
            .then((res) => {
                console.log("res = ", res);
                localStorage.setItem("x-access-token", res.token)
                localStorage.setItem("email", res.email)
                navigate("/")
            })
            .catch((error)=>{
                console.log("error = ", error);
                alert("Email & Password Not Matched")
            })


            // navigate("/")
        }
    }

    return (
        <>
            <div className="loginPage">
                <h2 style={{ textAlign: "center" }}>Login Page</h2>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleEmail}
                            invalid={email !== "" && emailError}
                            valid={email !== "" && !emailError}
                        />
                        <FormFeedback invalid>Email is InValid</FormFeedback>
                        <FormFeedback valid>Email is Valid</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <InputGroup>
                            <Input
                                type={showhideIcon ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={handlePassword}
                                invalid={password !== "" && passwordError}
                                valid={password !== "" && !passwordError}
                            />
                            <Button className="passwordIcon" onClick={handleShowHide}>
                                <IconContext.Provider value={{ size: 24 }}>
                                    {
                                        showhideIcon ? <BiHide /> : <BiShow />
                                    }
                                </IconContext.Provider>
                            </Button>
                            <FormFeedback invalid>Password is InValid!!! Password should be minimum length of 8 that contains atlease 1 uppercase, 1 lowercase, 1 symbol, 1 number.</FormFeedback>
                            <FormFeedback valid>Password is Valid</FormFeedback>
                        </InputGroup>
                    </FormGroup>

                    <div style={{ textAlign: "center", marginBottom: "15px" }}><Link to="/forgot">Forgot Password</Link></div>
                    {
                        (email !== "" && emailError) || (password !== "" && passwordError) ?
                            <Button className="loginButton" disabled>LOGIN</Button> :
                            <Button className="loginButton" onClick={handleLogin}>LOGIN</Button>
                    }

                </Form>

            </div>
        </>
    )
}
export default Login
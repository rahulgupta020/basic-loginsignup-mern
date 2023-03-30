import { useState } from "react"
import { Button, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap"
import validator from 'validator';
import { BiShow, BiHide } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmpasswordError, setConfirmpasswordError] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    const [showhideIcon, setShowhideIcon] = useState(false);
    const [showhideIcon1, setShowhideIcon1] = useState(false);

    const handleName = (event) => {
        setName(event.target.value)
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (regName.test(event.target.value)) {
            setNameError(false)
        } else {
            setNameError(true)
        }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
        if (validator.isEmail(email)) {
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
    const handleConfirmpassword = (event) => {
        setConfirmpassword(event.target.value)
        if(event.target.value === password){
            setConfirmpasswordError(false)
        } else {
            setConfirmpasswordError(true)
        }
    }

    const handleShowHide = (event) => {
        event.preventDefault();
        setShowhideIcon(!showhideIcon)
    }
    const handleShowHide1 = (event) => {
        event.preventDefault();
        setShowhideIcon1(!showhideIcon1)
    }

    const handleSignup = () => {
        if (name ==="" || email === "" || password === "" || confirmpassword ==="") {
            alert("Please Enter Details")
        }
        else {
            navigate("/login")
        }
    }

    return (
        <>
            <div className="signupPage">
                <h2 style={{textAlign:"center"}}>Sign Up</h2>
                <Form>

                <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter First & Last Name"
                            value={name}
                            onChange={handleName}
                            invalid={name !== "" && nameError}
                            valid={name !== "" && !nameError}
                        />
                        <FormFeedback invalid>Name is InValid!!!. Please Enter First Name & Last Name</FormFeedback>
                        <FormFeedback valid>Name is Valid</FormFeedback>
                    </FormGroup>

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

                    <FormGroup>
                        <Label for="confirmpassword">Confirm Password</Label>
                        <InputGroup>
                            <Input
                                type={showhideIcon1 ? "text" : "password"}
                                placeholder="Enter Password"
                                value={confirmpassword}
                                onChange={handleConfirmpassword}
                                invalid={confirmpassword !== "" && confirmpasswordError}
                                valid={confirmpassword !== "" && !confirmpasswordError}
                            />
                            <Button className="passwordIcon" onClick={handleShowHide1}>
                                <IconContext.Provider value={{ size: 24 }}>
                                    {
                                        showhideIcon1 ? <BiHide /> : <BiShow />
                                    }
                                </IconContext.Provider>
                            </Button>
                            <FormFeedback invalid>Password Does Not Match with Password Box</FormFeedback>
                            <FormFeedback valid>Password Matched</FormFeedback>
                        </InputGroup>
                    </FormGroup>

                </Form>

                {
                    (name !== "" && nameError) || (email !== "" && emailError) || (password !== "" && passwordError) || (confirmpassword !== "" && confirmpasswordError) ?
                        <Button className="signupButton" disabled>SIGN UP</Button> :
                        <Button className="signupButton" onClick={handleSignup}>SIGN UP</Button>
                }

            </div>
        </>
    )
}
export default Signup
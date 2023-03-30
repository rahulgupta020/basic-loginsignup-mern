import { BrowserRouter as Router, Routes as Routepage, Route } from "react-router-dom"
import Home from "../components/home"
import Login from "../components/login"
import Signup from "../components/signup"
import Header from "../containers/header"
import Footer from "../containers/footer"
import Forgot from "../components/forgot"

const Routes = () => {
    return(
        <>
            <Header />
            <Router>
                <Routepage>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/forgot" element={<Forgot />} />
                </Routepage>
            </Router>
            <Footer />
        </>
    )
}
export default Routes
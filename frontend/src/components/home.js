import { useEffect, useState } from "react"
import { Button, Table } from "reactstrap"
import { Service } from "../providers/service"

const Home = () => {

    const [signupalldata, setSignupalldata] = useState("");

    useEffect(() => {
        let id = localStorage.getItem("_id")
        // console.log(id);
        Service.signupall(id)
            .then((response) => {
                setSignupalldata(response)
            }, [])
            .catch((error) => {
                alert("Something went wrong");
            })
    })

    return (
        <>
            <div className="homePage">
                <h2>Your Account Details</h2>
                <Table bordered>
                    {/* <tbody>
                        <tr>
                            <td>Name</td>
                            <td><Button>Edit</Button></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><Button>Edit</Button></td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td><Button>Add</Button><Button>Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td><Button>Add</Button></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><Button>Edit</Button></td>
                        </tr>
                    </tbody> */}

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Gender</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { signupalldata.map((item, index) =>{
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td></td>
                                <td></td>
                                <td>{item.password}</td>                            
                            </tr>
                        }) } */}

                        {
                            Object.entries(signupalldata).map(([key, value]) => (
                                <tr>
                                    <td>{value}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </Table>
            </div>
        </>
    )
}
export default Home
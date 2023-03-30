import { Button, Table } from "reactstrap"

const Home = () => {
    return (
        <>
            <div className="homePage">
                <h2>Your Account Details</h2>
                <Table bordered>
                    <tbody>
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
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Home
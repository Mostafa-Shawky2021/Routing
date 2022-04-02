import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchAlluser } from "../../api/user";
export default function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetchAlluser().then((user) => {
      setUser(user.data);
    });
  }, []);
  console.log(users);
  return (
    <>
    <Container className="mt-5">
        <table className="table">
            <thead>
            <tr>
                
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Control</th>
            </tr>
            </thead>
            <tbody>
            {
                
                users.map( (user,index)=>{
                    return ( <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link className="btn btn-success me-2 ps-3 pe-3" to={`/profile/${user.id}`} >View</Link>
                            <a className="btn btn-primary ps-3 pe-3">edit</a>
                        </td>
                    </tr>
                    );
                })
            }
            </tbody>
        </table>
    </Container>
    </>
  );
}

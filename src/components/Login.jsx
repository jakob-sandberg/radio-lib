import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import styles from "../css/LoginPage.module.css";
import { UserContext } from "../contexts/UserContextProvider";


export default function Login() {
  const history = useHistory()
  const { users, setLoginState, setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    users.map((user) => {
      if ((user.email === email) && user.password === password && user.userName === userName) {
        setLoginState(true)
        setCurrentUser({
          userName: user.userName,
          email: user.email,
          password: user.password
        });
        history.push("/");
      }
    })
  }


  return (
    <div className={styles.formContainer}>
      <h1 className="text-center">Login</h1>
      <form onSubmit={login}  >

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Username
    </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleUsernameChange} type="username" placeholder="Username" />
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
    </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleEmailChange} type="email" placeholder="Email" />
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
    </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Container className="text-center">
          <Button variant="primary" type="submit">
            SIGN IN
            </Button>
        </Container>
      </form>


    </div>
  )
}
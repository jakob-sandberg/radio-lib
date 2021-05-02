import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import styles from "../css/LoginPage.module.css";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const Login = () => {
  const { login, setLoginState } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();


  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    let userInfo = {
      userName,
      email,
      password,
    };

    let result = await login(userInfo);
    if (result.success) {
      console.log("result.success: ", result.success);
      history.push("/");
    } else {
      setError(result.error);
      console.log(result.error)
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className="text-center">Login</h1>
      <form onSubmit={(e) => {
        submitLogin(e);
      }}  >

        <p
          className={`${styles.errorBox} ${error ? styles.active : styles.inactive
            }`}
        >
          {error}
        </p>

        <Form.Group as={Row} controlId="formHorizontalUsername">
          <Form.Label column sm={2}>
            Username
    </Form.Label>
          <Col sm={10}>
            <Form.Control onChange={handleUsernameChange} type="usernName" placeholder="Username" />
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

export default Login;
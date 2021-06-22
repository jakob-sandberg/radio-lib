import { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContextProvider'
import { Container, Form, Button } from "react-bootstrap"
import styles from "../css/LoginPage.module.css"

const Register = () => {
  const { register, setLoginState, setActiveUser } = useContext(UserContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [inputDefault, setInputDefault] = useState(true)
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (confirmPassword === "") {
      setInputDefault(true)
    } else {
      setInputDefault(false)
      if (confirmPassword.length >= 4 && password === confirmPassword) {
        setIsValid(true)
      }
      else {
        setIsValid(false)
      }
    }
  }, [password, confirmPassword])

  const userNameChange = (e) => {
    setUserName(e.target.value)
  }

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const checkPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      userName,
      email,
      password,
    };
    if (isValid) {
      let result = await register(newUser);
      if (result.success) {
        setLoginState(true)
        setActiveUser(result)
        history.push("/");
      } else {
        setError(result.error);
      }
    } else {
      console.log("not valid");
    }
  };
  return (
    <div className={styles.registerContainer}>
      <h1 className="text-center">Bli en medlem</h1>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p
          className={`${styles.errorBox} ${error ? styles.active : styles.inactive
            }`}
        >
          {" "}
          {error}
        </p>
        <Form.Group className={styles.input}   controlId="formBasicUser">
          <Form.Label>Användarnamn</Form.Label>
          <br />
          <Form.Control onChange={userNameChange} type="username" placeholder=" Användarnamn" required />
        </Form.Group>

        <Form.Group className={styles.input}   controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <br />
          <Form.Control onChange={emailChange} type="email" placeholder="Email" required />
        </Form.Group>


        <Form.Group className={styles.input}   controlId="formBasicPassword">
          <Form.Label>Lösenord</Form.Label>
          <br />
          <Form.Control onChange={passwordChange} type="password" name="password" placeholder="Minst 4st bokstäver/siffror" minLength="4" required />
        </Form.Group>


        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Bekräfta Lösenord</Form.Label>
          <br />
          <Form.Control className={inputDefault ? "" : isValid ? "is-valid" : "is-invalid"} onChange={checkPassword} type="password" name="confirm" placeholder="Bekräfta Lösenord" required />
        </Form.Group>


        <Container className="text-center">
          <Button className={styles.singInButton} variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default Register;
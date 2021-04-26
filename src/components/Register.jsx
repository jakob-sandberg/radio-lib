import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import { Alert, Container, Form, Button } from "react-bootstrap"
import styles from "../css/register.module.css"

const Register = () => {
  const { addToRegistration, isMember, setIsMember } = useContext(UserContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [inputDefault, setInputDefault] = useState(true)

  useEffect(() => {
    setIsMember(false)
  }, [])

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

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const checkPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    if (isValid) {
      addToRegistration(e, email, password)
    }
    else {
      e.preventDefault();
    }
  }

  return (
    <div className={styles.registerContainer}>
      <h1 className="text-center">Become a Member</h1>
      <Form onSubmit={handleSubmit}>
        <Alert variant={"danger"} className={`${styles.errorBox} ${isMember ? styles.active : styles.inactive}`}>This email already exist.</Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control onChange={emailChange} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Create a password</Form.Label>
          <br />
          <Form.Control onChange={passwordChange} type="password" name="password" placeholder="Please enter more than 4 characters" minlength="4" required />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">

          <Form.Label>Confirm the password</Form.Label>
          <br />
          <Form.Control className={inputDefault ? "" : isValid ? "is-valid" : "is-invalid"} onChange={checkPassword} type="password" name="confirm" placeholder="Confirm Password" required />
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
import {React, useState, useContext} from 'react';
import { Alert, Container, Form, Button } from "react-bootstrap"
import styles from "../css/register.module.css"
import { UserContext } from '../contexts/UserContextProvider'

import { TiDelete } from 'react-icons/ti';


const ChangeInfo = () => {
  const { addToRegistration, isMember, setIsMember } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
   
  return (
    <div>
    <h3>Edit your profile</h3>
    <form>
    <Alert variant={"danger"} className={`${styles.errorBox} ${isMember ? styles.active : styles.inactive}`}>This email already exist.</Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control onChange={emailChange} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Container className="text-center">
          <Button className={styles.singInButton} variant="primary" type="submit">
            Change Email
          </Button>
        </Container>
    </form>

    <div><TiDelete size={35} /></div>
    </div>
  )
}

export default ChangeInfo;
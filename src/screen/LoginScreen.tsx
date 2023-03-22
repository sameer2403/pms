
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Alert from "react-bootstrap/Alert";

//import { useNavigate } from 'react-router-dom'

import { alertset, userinfoRequest, userLoginRequestAction, userLoginSuccessAction } from '../state/action-creators'
import { useAppSelector } from '../Types'



import { Alertshow } from '../component/AlertShow';
type Props = {}

function LoginScreen({ }: Props) {


  const navigate = useNavigate()

  useEffect(() => {

    const itemSet = (localStorage.getItem('userdata'));
    console.log(itemSet)
    if (itemSet) {
      console.log('here')
      navigate('/navigate')
    }
  }, [])


  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [isAdmin, setIsAdmin] = useState(false)

  const [errorss, setErrorss] = useState(false)

  const [successlogin, setSuccesslogin] = useState(false)

  const dispatch = useDispatch()

  const { successLogin, loadingLogin, errorLogin, message, userIdLogin, userNameLogin } = useAppSelector((state:any) => {
    console.log(state);
    return state.userReducer;
})

  const usernameFunc = (em: string) => {

    setUsername(em)

    setErrorss(false)
  }

  const passFunc = (em: string) => {

    setErrorss(false)
    setPassword(em)
  }

  const adminFunc = (che: string) => {



    setIsAdmin(!isAdmin)
  }

  const userFunc = (che: string) => {

    setIsAdmin(!isAdmin)
  }

  const signupHandler = () => {

    dispatch(userLoginRequestAction(username, password))
  }

  if (successLogin) {
    const obj = {

      userId: userIdLogin,

      userName: userNameLogin
    }

    const userdata = JSON.stringify(obj)

    localStorage.setItem('userdata', userdata)

    //dispatch(userinfoRequest(userId))

    //dispatch(userLoginSuccessAction())


    setTimeout(() => {
      navigate('/navigate')
    }, 4000);


  }

  const arr = { "msgtype": "success", "msg": `Hi ${userNameLogin} welcome !!` }

  const arr2 = { "msgtype": "danger", "msg": "username or password invalid" }


  return (
    <>
      {
        successLogin ? <Alertshow arrs={arr} /> : <div></div>
      },
      {
        errorLogin && !loadingLogin && !successLogin ? <Alertshow arrs={arr2} /> : <div></div>
      },
      <Form style={{ marginTop: '100px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="username" onChange={(event) => usernameFunc(event.target.value)} />

          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => passFunc(event.target.value)} />
        </Form.Group>

        {/* <Button variant="primary" type="submit" onClick = {(event) => submitHandlerFunc(event)}>
        Submit
      </Button> */}
        <br />
        <br />
        {errorss ? <div style={{ color: 'red' }}>Please enter username and password correctly</div> : <div></div>}

        <Button variant='primary' onClick={signupHandler}>Login</Button>

      </Form>
    </>
  )
}

export default LoginScreen
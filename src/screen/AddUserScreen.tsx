

import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Alertshow } from '../component/AlertShow';

import { alertset, userSignupRequestAction } from '../state/action-creators';
import { useAppSelector } from '../Types';


import { useEffect } from 'react';



interface IAppProps {
}

const AddUserScreen: React.FunctionComponent<IAppProps> = (props) => {

  

    const [fullName,setFullName] = React.useState('')

  const [email,setEmail] = useState('')

  const [password,setPassword] = useState('')

  const [isAdmin,setIsAdmin] = useState(true)

  const [errorss,setErrorss] = useState(false)

  const [username,setUsername] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // const alertData : []  = useAppSelector(state => state.alertReducer);
  
  const {successSignup, loadingSignup,errorSignup} = useAppSelector((state : any)=> {
    
    return state.userReducer
  })


  useEffect(() => {


    if(!localStorage.getItem('userdata'))
    {
        navigate('/user/login')
    }

    if(localStorage.getItem('userdata'))
    {
       const userRole = localStorage.getItem('userdata')

       if(userRole != 'Admin')
       {
          navigate('/navigate')
       }
    }

},[])

  console.log(successSignup,"success")
  // if(success && !loading)
  // {
  //   console.log("skjvbsk")
  //   dispatch(alertset("success added","success"))

  // }
  const usernameFunc = (e : string) => {

    setUsername(e)

    setErrorss(false)
  }
  const fullNameFunc = (em : string) => {
    setFullName(em)

    setErrorss(false)
  }


  const emailFunc = (em : string) => {

      setEmail(em)

      setErrorss(false)
  }

  const passFunc = (em: string) => {

    setErrorss(false)
      setPassword(em)
  }

  const adminFunc = (che : string) => {
      setIsAdmin(!isAdmin)

      setErrorss(false)
  }

  const userFunc = (che : string) => {

      setIsAdmin(!isAdmin)

      setErrorss(false)
  }

  const submitHandlerFunc = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

      e.preventDefault()
      
      let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

      if(email.match(regex) && (password.length >= 6) && username !== null)
      {
          const str = isAdmin ? "Admin" : "User";

          dispatch(userSignupRequestAction(username, email,password,str))
      }
      else{

          setErrorss(true)
      }
  }
  
  const arr = {"msgtype" : "success", "msg" : "successfully added user"}

  const arr2 = {"msgtype" : "danger", "msg" : "user not added"}


  console.log("heyyyy",successSignup)
return (
  <>
  {successSignup && !loadingSignup && <Alertshow arrs = {arr}/>},
  {errorSignup && !successSignup && !loadingSignup && <Alertshow arrs = {arr2}/>},
  {errorss ? <h5 style = {{color : 'red'}}>Please enter email and password correctly</h5> : <div></div>}

  <Form style = {{marginTop : '100px'}}>
    <Form.Group className="mb-3" controlId="fullName">

      <Form.Label>user name</Form.Label>
      <Form.Control type="text" placeholder="Enter your fullname"  onChange = {(event) => usernameFunc(event.target.value)}/>
      <Form.Text className="text-muted">
  
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange = {(event) => emailFunc(event.target.value)}/>
      
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange = {(event) => passFunc(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" style = {{margin : '2px'}}>
      <Form.Check type="radio" label="Admin" onChange = {(event) => adminFunc(event.target.value)} checked = {isAdmin}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox" style = {{margin : '2px'}}>
      <Form.Check type="radio" label="User" onChange = {(event) => userFunc(event.target.value)} checked = {!isAdmin}/>
    </Form.Group>

    <Button onClick = {submitHandlerFunc}>Submit</Button>
    
    
    <br/>
    <br/>
   
  
  </Form>
  </>
  );
};

export default AddUserScreen;



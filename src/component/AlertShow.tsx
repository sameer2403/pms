


import { useState, useEffect } from "react";

import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { isVariableDeclarationList } from "typescript";
import { userActionType } from "../state/action-types";


export function Alertshow (arrs : any)   {
  const [isHide, setIsHide] = useState(false);

  //console.log(arrs[0],arrs[1],arrs,typeof(arrs))

  const str1  = arrs.arrs.msgtype

  const str2 = arrs.arrs.msg

  var x = 0

  //const str2 = arrs[1]

  //setTimeout(() => setIsHide(false), 5000);

//   setTimeout(() => setIsHide(true),10000
console.log("alertshow",arrs.arrs.msgtype,arrs.arrs.msg,typeof(arrs),arrs,isHide)


const dispatch = useDispatch()

useEffect(() => {
    const timeoutId : any = setTimeout(() => {
      setIsHide(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);

      
      
    }; // return function will only run when the component unmount
  }, []); // using empty square bracket it means after the component muount it will run only once

 
  useEffect(() => {

    
      if(isHide)
      {
        
        
        dispatch({type : userActionType.USER_SIGNUP_RESET})
      }
  },[isHide])

 // const types = variants
  return (
    <>
    { !isHide ? <Alert variant = {str1} style={{ width: "42rem", marginTop: "100px" }}>
      <Alert.Heading>
        {str2}
      </Alert.Heading>
    </Alert> : <div></div>}

    </>
  );
}


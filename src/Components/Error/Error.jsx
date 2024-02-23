import React, { useEffect } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Error = ({customId, error1, error2}) => {
  
useEffect(() => {
  const notify = (error) => {
    toast.error(`Wow so easy ! ${error}`, {
      position: "top-center",
      toastId: customId,
      autoClose: 7000
    });
  };

  if(error1) {
    notify(error1)
  }
  if(error2) {
    notify(error2)
  }
}, [error1, error2, customId])



  return (
    <>
      <ToastContainer autoClose={8000} limit={3} transition={Slide} draggablePercent={60}/>
    </>
  )
}

export default Error

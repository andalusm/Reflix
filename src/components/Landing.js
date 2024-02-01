import React from 'react'
import User from './User';
import Grid from '@mui/material/Card';

export default function Landing({changeUser, users}) {
  return (
    <>
    <h1 style={{"color":"white"}}>WHO'S WATCHING?</h1>
   
    <div className='users'>{users.map(u=> <User key={u.id} changeUser={()=>changeUser(u.id)} name={u.name} backgroundColor={u.backgroundColor}></User>)}</div>

    </>
  )
}

import React from 'react'
import addUsers from '../helpers/addUser'

export const Login = (props) => {

    const onSubmit = (user, mail, ev) => {
        console.log("check")
        addUsers(user,mail)
        //ev.preventDefault();
        
        
    
    }

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
        <form onSubmit={ev => {
            // ev.target.add1.value
                        
            console.log(ev)
            const user = ev.target.add1.value
            const mail = ev.target.add2.value
                        
            onSubmit(user, mail, ev);
            }}
        >
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input name='add1' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Correo</label>
            <input name='add2' type="text" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8090/api/employee/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exist") 
             {
               alert("Email does not exist!");
             } 
             else if(res.data.message === "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
         catch (err) {
          alert(err);
        }
      
      }

    return (
       <div>
            <div className="container">
            <div className="row">
                <h2>Login</h2>
             <hr/>
             </div>

             <div className="row">
             <div className="col-sm-6">
 
            <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email"  className="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />

        </div>

        <div className="form-group">
            <label>password</label>
            <input type="password"  className="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
        </div>
        <div>
            <label for="Regsiter"> Don't have an accounr? <Link to="/register"> register </Link></label>
        </div>
                  <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
              </form>

        </div>
        </div>
        </div>

     </div>
    );
  }
  
  export default Login;
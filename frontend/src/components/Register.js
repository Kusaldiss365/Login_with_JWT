import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8090/api/employee/register", {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registration Successful!");
          navigate("/login")

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Employee Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
        <button class="btn btn-warning mt-4"><Link to="/"> Go back</Link></button>
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;
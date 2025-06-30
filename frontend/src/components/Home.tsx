import"./Home.css";
import InputContainer from "./InputContainer";
import {useState} from"react";
const Home = ()=>{
    const[display,setdisplay] = useState(false);
    return(
        <>
        <center>
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            {/* <a href="" onClick={()=>setdisplay(true)}>Login</a> */}
        </nav>
        <div>
            <h1>Welcome on this site</h1>
        </div>
        <div class="hiddenform">
      <form>
        <h2>Get Login Here</h2>
        <InputContainer 
          name="username" 
          id="uname" 
          placeholder="Enter your Username" 
          inputType="text" 
          labelName="Username"  />

          <InputContainer 
          name="password" 
          id="pswd" 
          placeholder="Enter your Password" 
          inputType="password" 
          labelName="Password"  />

          <input type="submit" name="signup" value="Login" class="button" />
          
      </form>
      </div>
        </center>
        </>
    )
}
export default Home;
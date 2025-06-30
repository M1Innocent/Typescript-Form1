import axios from "axios";
import {useForm} from "react-hook-form";
function App(){
  const {register, handleSubmit} = useForm();
  function signup(data: object){
    axios.post("http://localhost:4400/insert", data).then((response)=>{
      alert(response.data.message);
    })
  }

  return (
    <>
     <div className="form">
      <form onSubmit={handleSubmit(signup)}>
        <h2>Sign up form</h2>
          <input type="text" placeholder="Username" {...register("names")} />        
          <input type="text" placeholder="Password" {...register("pswd")} />        
          <input type="submit" name="signup" value="Signup" className="button" />
      </form>
      </div>
      <hr />
    </>
  );
}

export default App
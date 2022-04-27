import { authService } from "fbase";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) =>{
        const{
            target: {name, value},
        } = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async(event) =>{
        event.preventDefault();
        try{
            let data;
            if (newAccount){
                // create newAccount
                data = await authService.createUserWithEmailAndPassword(email, password);
            }else{
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        }catch(error){
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev)=> !prev);

    const onSocialClick = (event) => {
        console.log(event.target.name);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name = "email" type = "email" placeholder="Email" required value={email} onChange={onChange} />
                <input name = "password" type = "password" placeholder="Password" required value={password} onChange={onChange} />
                <input type = "submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span on Click={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button onClick = {onSocialClick} name = "google">Continue with Google</button>
                <button onClick = {onSocialClick} name = "github">Continue with Google</button>
            </div>
        </div>
    );
};

export default Auth;
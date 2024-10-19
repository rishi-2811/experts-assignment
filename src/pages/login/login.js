import Navbar from "../../components/navbar/navbar";
import LoginForm from "../../components/loginForm/loginForm";


export const LoginPage=()=>{
    return(
        <div className="container">
            <Navbar isLogin={true}/>
            <LoginForm/>
        </div>
    )
}
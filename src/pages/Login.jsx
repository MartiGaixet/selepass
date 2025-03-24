import React from "react";
import Form from "../components/LoginForm"
import Logo from "../assets/LogoSP.png"
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const goSignup = () => {
        navigate("/Signup");
      }


    return (
    <div className="d-flex">
        <div className="bodyLogin">
            <img src={Logo} width="100" height="auto" alt="Logo" className="mt-5 ms-5"></img>
            <h4 className="othersSubtitles mt-5">Bienvenido a</h4>
            <h1 className="mt-4 titleLogin">SELEPASS</h1>
            <h6 className="mt-5 descLogin">La web #1 a nivel nacional para prepararte para la selectividad</h6>
        </div>
        <div className="formContainer">
            <h4 className="mt-5">Selepass</h4>
            <h4 className="mt-5 text-align-left">Bienvenido!</h4>
            <p className="mt-2">No tienes cuenta? Crea una cuenta <span onClick={goSignup}><b>aquí</b></span></p>
            <div className="mt-5 d-flex justify-content-center">
            <Form></Form>
            </div>
        
        </div>
    </div>

    );
}

export default Login
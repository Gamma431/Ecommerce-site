import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Login(){
const [mode, setMode] = useState("signup")
const [error, setError] = useState(null)
const {signUp, user, logOut, logIn} = useContext(AuthContext)
const navigate = useNavigate()
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm()

function onSubmit(data){
    setError(null)

    let result

    if(mode === "signup" ){
        result = signUp(data.email, data.password)
    }    else{
        result = logIn(data.email, data.password)
    }

    if(result.success){
        alert("Welcome: " + data.email)
        navigate("/")
    }else{
        setError(result.error)
    }

    
}

    return (
        <div className="page">  
            <div className="login-cont">
                <div className="signup-box">
                    {user && <p>User logged in: {user.email}</p>}
                    <button onClick={()=> logOut( )}>Logout</button>
                    <h1 className="sign-title">{mode === "signup" ? "Sign Up" : "Log In"}</h1>
                    <form className="sign-form" onSubmit={handleSubmit(onSubmit)}>

                        {error && <div className="form-error">{error}</div>}

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" placeholder="type your Email..." className="form-inp" id="email"  {...register("email", {required: "Email is required"})} />
                            {errors.email && (
                                <span className="form-error">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" placeholder="type your password..." className="form-inp" id="password" 
                                {...register("password",{
                                    required: "Password is required",
                                    minLength:{
                                        value:8,
                                        message:"Password must be at least 8 characters"
                                    },
                                    maxLength: {
                                        value:12,
                                        message: "Password must be at most 12 characters"
                                    }
                                })}
                            />
                            {errors.password && (
                                <span className="form-error">{errors.password.message}</span>
                            )}
                        </div>


                        <button type="submit" className="Log-btn-primary">{mode === "signup" ? "Sign Up" : "Log In"}</button>
                    </form>


                    <div className="log-switch">
                        {mode === "signup" ? (
                            <p>Already have an account?{" "} <span className="switch-span" onClick={() => setMode("login")}>LogIn</span>  </p>
                        ): (
                            <p>Don't have an account?{" "} <span className="switch-span" onClick={() => setMode("signup")}>SignUp</span>  </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
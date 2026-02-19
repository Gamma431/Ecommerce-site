import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Nav() {
    const {user, logOut} = useAuth()
    
    return (
        <nav className="nav">
            <div className="logo">
                <img src="/img/unnamed.png" alt="Logo" className="nav-logo"/>
                <Link className="logo-txt" to="/">BackStore</Link>
            </div>

            <div className="nav-menu">
                <Link to="/" className="menu-links">Home</Link>
                <Link to="/checkout" className="menu-links">Cart</Link>
            </div>
            {!user ? <div className="nav-log">
                <Link to="/login" className="Log-btn-secondary">Log-in</Link>
                <Link to="/login" className="Log-btn-primary">Sign-up</Link>
            </div> : (
                <div className="nav-user">
                    <span> Hello  {user.email}</span>
                    <button className="logout-btn" onClick={logOut}></button>
                </div>
            )}
        </nav>
    )
}
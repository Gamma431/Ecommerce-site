import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="nav">
            <div className="logo">
                <Link className="logo-txt" to="/">BackStore</Link>
            </div>

            <div className="nav-menu">
                <Link to="/" className="menu-links">Home</Link>
                <Link to="/checkout" className="menu-links">Cart</Link>
            </div>
            <div className="nav-log">
                <Link to="/login" className="Log-btn-secondary">Log-in</Link>
                <Link to="/login" className="Log-btn-primary">Sign-up</Link>
            </div>
        </nav>
    )
}
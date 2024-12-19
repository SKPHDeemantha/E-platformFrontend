import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <nav className="navbar">
                <h1 className="logo">MyWebsite</h1>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <header className="hero">
                <h2>Welcome to MyWebsite</h2>
                <p>Your one-stop destination for awesome content.</p>
                <button className="cta-button">Get Started</button>
            </header>
            <Link to="/login"></Link>
        </div>
    );
}

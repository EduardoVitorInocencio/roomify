import { Box } from "lucide-react";
import Button from "./ui/Button";
const NavBar = () => {
    const isSignedIn = false; // Replace with actual authentication logic
    const userName = "John Doe"; // Replace with actual user name
    const handleAuthClick = () => {
        // Handle authentication logic here
    }
  return (
    <header className="navbar">
        <nav className="inner">
            <div className="left">
                <div className="brand">
                    <Box className="logo"/>
                    <span className="name">
                        Roomify
                    </span>
                </div>

                <ul className="links">
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Community</a>
                    <a href="#">Enterprise</a>
                </ul>
            </div>

            <div className="actions">
                {isSignedIn ? (
                    <>
                        <span className="greetings">
                            {userName ? `Hello, ${userName}` : "Signed in"}
                        </span>

                        <Button size="sm" onClick={handleAuthClick} className="btn">
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={handleAuthClick}
                            size="sm"
                            variant="ghost"
                            className="login">
                                Log in
                        </Button>

                        <a href="#upload" className="cta">
                            Get Started
                        </a>
                    </>
                )}
            </div>
        </nav>
    </header>
  )
}

export default NavBar

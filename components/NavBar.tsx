import { Box } from "lucide-react";
const NavBar = () => {
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
            </div>
        </nav>
    </header>
  )
}

export default NavBar

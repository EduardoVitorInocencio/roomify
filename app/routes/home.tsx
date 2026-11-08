import { ArrowRight } from "lucide-react";
import NavBar from "../../components/NavBar";
import type { Route } from "./+types/home";
import Button from "../../components/ui/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <NavBar/>
      
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
            <p>Introducing Roomfy 2.0</p>
        </div>

        <h1>Build beautiful spaces at the speed of thought with Roomfy</h1>

        <p className="subtitle">
          Discover the future of interior design with our revolutionary platform.
          Roomify is an AI-first design environment, that helps you visualize, render ans ship architectural projects faster than ever before.
        </p>

        <div className="actions">
          <a href="#upload" className="cta">
            Start building <ArrowRight className="icon"/>
          </a>

          <Button variant="outline" size="lg" className="demo">
            Watch demo
          </Button>
        </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your  latest work and share community projects, all in one place.</p>
            </div>

          </div>

          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img 
                  src="https://puter.com/?shared=%2Fcalm_mountain_854167%2Facd6bec0-bb6f-49dc-b381-248227123aba%2FScreenshot%202025-10-22%20212249.png" alt="" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

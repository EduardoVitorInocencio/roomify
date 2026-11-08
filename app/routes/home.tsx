import { ArrowRight, Clock } from "lucide-react";
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
                  src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="project" 
                />

                <div className="badge">
                  <span>Community</span>
                </div>
              </div>

              <div className="card-body">
                <div>
                  <h3>Modern Living Room</h3>
                  <div className="meta">
                    <Clock size={12} />
                    <span>{new Date().toLocaleDateString()}</span>
                    <span>by Eduardo Inocencio</span>
                  </div>
                </div>
                  <div className="arrow">
                    <ArrowRight size={18} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

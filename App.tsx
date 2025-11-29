import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Mission } from "./components/Mission";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";
import { Donate } from "./components/Donate";
import { Donors } from "./components/Donors";
import { MeetTheTeam } from "./components/MeetTheTeam";

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get("page") || "home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", page);
    window.history.pushState({}, "", newUrl);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onNavigate={handleNavigate} />
          </>
        );
      case "about":
        return <AboutUs />;
      case "team":
        return <MeetTheTeam />;
      case "mission":
        return <Mission />;
      case "projects":
        return <Projects onNavigate={handleNavigate} />;
      case "project-arduino-switch":
        return (
          <ProjectDetail
            key="arduino-switch"
            projectId="arduino-switch"
            onNavigate={handleNavigate}
          />
        );
      case "project-eeg-headset":
        return (
          <ProjectDetail 
          key="eeg-headset"
          projectId="eeg-headset" 
          onNavigate={handleNavigate} />
        );
      case "contact":
        return <Contact />;
      case "donate":
        return <Donate onNavigate={handleNavigate} />;
      case "donors":
        return <Donors onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <footer className="border-t bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-white">Neurotech at NC State</h4>
              <p className="text-sm text-white/80">
                Empowering communication through innovative assistive technology
                for children with disabilities.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <button
                  onClick={() => handleNavigate("about")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigate("projects")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={() => handleNavigate("donate")}
                  className="text-left text-white/80 hover:text-white transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Contact</h4>
              <div className="text-sm text-white/80">
                <p>North Carolina State University</p>
                <p>Raleigh, NC</p>
                <p className="mt-2">neurotech-org@ncsu.edu</p>
                <p>(919)-437-1380</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 Neurotech at NC State. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

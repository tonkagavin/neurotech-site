import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Image } from "./Image";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [donationsDropdownOpen, setDonationsDropdownOpen] = useState(false);

  const projects = [
    { id: "arduino-switch", name: "Arduino Communication Switch" },
    { id: "project-2", name: "Future Project 2" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setAboutDropdownOpen(false);
        setProjectsDropdownOpen(false);
        setDonationsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/logo/logo.png"
              alt="NC State Neurotech"
              className="h-10 w-auto object-contain bg-white rounded-lg px-2"
              fallbackSrc="https://images.unsplash.com/photo-1744324472890-d4cac1650e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3RlY2glMjBicmFpbiUyMHRlY2hub2xvZ3klMjBsb2dvfGVufDF8fHx8MTc2MzYwMTc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <span className="hidden sm:inline text-white">NC State Neurotech</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onNavigate("home")}
              className={`text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md ${
                currentPage === "home" ? "text-black bg-gray-200/20" : ""
              }`}
            >
              Home
            </button>
            
            {/* About Us Dropdown */}
            <div 
              className="relative dropdown-container" 
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => {
                setAboutDropdownOpen(true);
                setProjectsDropdownOpen(false);
                setDonationsDropdownOpen(false);
              }}
            >
              <button
                onClick={() => {
                  setAboutDropdownOpen(!aboutDropdownOpen);
                  setProjectsDropdownOpen(false);
                  setDonationsDropdownOpen(false);
                }}
                className={`flex items-center gap-1 text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md ${
                  currentPage === "about" || currentPage === "team" ? "text-black bg-gray-200/20" : ""
                }`}
              >
                About Us
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[250px] rounded-md border bg-popover text-popover-foreground shadow-md p-2 z-50">
                  <button
                    onClick={() => {
                      onNavigate("about");
                      setAboutDropdownOpen(false);
                    }}
                    className="block w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-accent"
                  >
                    <div>About NC State Neurotech</div>
                    <p className="text-sm text-muted-foreground">
                      Learn more about our organization
                    </p>
                  </button>
                  <button
                    onClick={() => {
                      onNavigate("team");
                      setAboutDropdownOpen(false);
                    }}
                    className="block w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-accent"
                  >
                    <div>Meet the Team!</div>
                    <p className="text-sm text-muted-foreground">
                      Our leadership and members
                    </p>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate("mission")}
              className={`text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md ${
                currentPage === "mission" ? "text-black bg-gray-200/20" : ""
              }`}
            >
              Mission
            </button>

            {/* Projects Dropdown */}
            <div 
              className="relative dropdown-container" 
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => {
                setProjectsDropdownOpen(true);
                setAboutDropdownOpen(false);
                setDonationsDropdownOpen(false);
              }}
            >
              <button
                onClick={() => {
                  setAboutDropdownOpen(false);
                  setProjectsDropdownOpen(!projectsDropdownOpen);
                  setDonationsDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md"
              >
                Projects
                <ChevronDown className={`h-4 w-4 transition-transform ${projectsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[300px] rounded-md border bg-popover text-popover-foreground shadow-md p-2 z-50">
                  <button
                    onClick={() => {
                      onNavigate("projects");
                      setProjectsDropdownOpen(false);
                    }}
                    className="block w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-accent"
                  >
                    <div>All Projects</div>
                    <p className="text-sm text-muted-foreground">
                      View all our initiatives
                    </p>
                  </button>
                  <div className="my-2 h-px bg-border" />
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        onNavigate(`project-${project.id}`);
                        setProjectsDropdownOpen(false);
                      }}
                      className="block w-full rounded-md px-4 py-2 text-left transition-colors hover:bg-accent"
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className={`text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md ${
                currentPage === "contact" ? "text-black bg-gray-200/20" : ""
              }`}
            >
              Contact
            </button>

            {/* Donations Dropdown */}
            <div 
              className="relative dropdown-container" 
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => {
                setDonationsDropdownOpen(true);
                setAboutDropdownOpen(false);
                setProjectsDropdownOpen(false);
              }}
            >
              <button
                onClick={() => {
                  setAboutDropdownOpen(false);
                  setDonationsDropdownOpen(!donationsDropdownOpen);
                  setProjectsDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-white transition-colors hover:text-black hover:bg-gray-200/20 px-3 py-2 rounded-md"
              >
                Donations
                <ChevronDown className={`h-4 w-4 transition-transform ${donationsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {donationsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[250px] rounded-md border bg-popover text-popover-foreground shadow-md p-2 z-50">
                  <button
                    onClick={() => {
                      onNavigate("donate");
                      setDonationsDropdownOpen(false);
                    }}
                    className="block w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-accent"
                  >
                    <div>Donate Now</div>
                    <p className="text-sm text-muted-foreground">
                      Support our mission
                    </p>
                  </button>
                  <button
                    disabled
                    className="block w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-accent opacity-50 cursor-not-allowed"
                  >
                    <div>Our Donors</div>
                    <p className="text-sm text-muted-foreground">
                      Thank you to our supporters
                    </p>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white transition-colors hover:text-black hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate("home");
                  setMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-black transition-colors"
              >
                Home
              </button>
              
              <div>
                <div className="mb-2 text-white/70">About Us</div>
                <div className="ml-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onNavigate("about");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-white hover:text-black transition-colors"
                  >
                    About NC State Neurotech
                  </button>
                  <button
                    onClick={() => {
                      onNavigate("team");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-sm text-white hover:text-black transition-colors"
                  >
                    Meet the Team
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => {
                  onNavigate("mission");
                  setMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-black transition-colors"
              >
                Mission
              </button>
              
              <div>
                <div className="mb-2 text-white/70">Projects</div>
                <div className="ml-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onNavigate("projects");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-white hover:text-black transition-colors"
                  >
                    All Projects
                  </button>
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        onNavigate(`project-${project.id}`);
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-sm text-white hover:text-black transition-colors"
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className="text-left text-white hover:text-black transition-colors"
              >
                Contact
              </button>

              <div>
                <div className="mb-2 text-white/70">Donations</div>
                <div className="ml-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      onNavigate("donate");
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-white hover:text-black transition-colors"
                  >
                    Donate Now
                  </button>
                  <button
                    disabled
                    className="text-left text-white/50 hover:text-white/50 transition-colors cursor-not-allowed"
                  >
                    Our Donors
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
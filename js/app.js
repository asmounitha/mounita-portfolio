// React Component Architecture for Mounita A S Portfolio

const { useState, useEffect, useRef } = React;

// Lucide Icon Helper Component
const Icon = ({ name, className = "w-5 h-5", size }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (window.lucide && iconRef.current) {
      window.lucide.createIcons({
        attrs: {
          class: className
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, className]);

  // Convert CamelCase icon name to kebab-case for Lucide
  const kebabName = name
    ? name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    : 'code';

  return <i data-lucide={kebabName} className={className} ref={iconRef}></i>;
};

function App() {
  const data = window.PORTFOLIO_DATA;
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth Active Navigation Tracker
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-render Lucide icons on DOM updates
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [selectedSkillCategory, selectedProject, resumeModalOpen]);

  // Handle Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      showToast('Please fill in all fields before sending.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      showToast('Thank you for reaching out! Mounita will get back to you soon.', 'success');
    }, 800);
  };

  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen text-slate-100 relative">

      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl backdrop-blur-xl border shadow-2xl flex items-center gap-3 transition-all duration-300 ${
          toastMessage.type === 'success'
            ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-200'
            : 'bg-rose-950/80 border-rose-500/40 text-rose-200'
        }`}>
          <Icon name={toastMessage.type === 'success' ? 'CheckCircle2' : 'AlertCircle'} className="w-6 h-6 shrink-0" />
          <p className="text-sm font-medium">{toastMessage.text}</p>
        </div>
      )}

      {/* Background Orbs */}
      <div className="glow-orb glow-orb-indigo w-[600px] h-[600px] top-[-100px] left-[-200px]"></div>
      <div className="glow-orb glow-orb-cyan w-[500px] h-[500px] top-[40%] right-[-150px]"></div>
      <div className="glow-orb glow-orb-violet w-[550px] h-[550px] bottom-[10%] left-[-100px]"></div>

      {/* STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090d16]/80 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo & Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-lg">
                M
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                Mounita A S
              </span>
              <span className="block text-[11px] text-slate-400 font-mono">
                REVA CSE '29
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-white/5 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1222]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 py-12">

        {/* SECTION 1: HERO / HOME */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center pt-8 pb-12">
          <div className="max-w-4xl space-y-8">

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 status-dot-active"></span>
              <span className="text-xs sm:text-sm font-mono text-cyan-300 font-medium">
                {data.personal.statusBadge}
              </span>
            </div>

            {/* Hero Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text">{data.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {data.personal.title}
              </p>
              <p className="text-base sm:text-lg font-mono text-cyan-400/90 flex items-center gap-2">
                <Icon name="Building2" className="w-4 h-4 text-cyan-400" />
                {data.personal.institution} <span className="text-slate-500">•</span> {data.personal.graduationClass}
              </p>
            </div>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              "{data.personal.heroIntro}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore My Work
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md flex items-center gap-2"
              >
                Get In Touch
                <Icon name="Mail" className="w-4 h-4" />
              </a>

              {/* Resume Button Quick Action */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-cyan-400 bg-slate-900/60 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <Icon name="FileText" className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Secondary Social Links */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-slate-400 text-sm">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Connect:</span>
              <a href={data.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Icon name="Github" className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href={data.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Icon name="Linkedin" className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${data.personal.socials.email}`} className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Icon name="Mail" className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 2: ABOUT ME */}
        <section id="about" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="User" className="w-3.5 h-3.5" /> About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Passionate Learner & Future Software Engineer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Narrative & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {data.personal.aboutIntro}
              </p>

              {/* Personal Statement Quote Card */}
              <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-cyan-400 relative overflow-hidden space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                  <Icon name="Sparkles" className="w-4 h-4" /> Personal Statement
                </div>
                <p className="text-slate-200 italic text-base leading-relaxed">
                  "{data.personal.aboutQuote}"
                </p>
              </div>
            </div>

            {/* 4 Quick Info Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.quickCards.map((card) => (
                <div key={card.id} className="p-5 rounded-2xl glass-panel glass-card-interactive space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon name={card.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-slate-100 font-bold text-sm sm:text-base leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: EDUCATION */}
        <section id="education" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="GraduationCap" className="w-3.5 h-3.5" /> Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Academic Foundation
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-indigo-500/20 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-1">
                  Undergraduate Program
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {data.education.institution}
                </h3>
                <p className="text-slate-300 font-medium text-lg mt-1">
                  {data.education.degree}
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-sm font-mono font-semibold">
                  {data.education.duration}
                </span>
                <p className="text-xs text-slate-400 mt-2 font-mono flex items-center sm:justify-end gap-1">
                  <Icon name="MapPin" className="w-3.5 h-3.5 text-slate-500" />
                  {data.education.location}
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              {data.education.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Core Computer Science Subjects & Domains:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {data.education.coreSubjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium hover:border-indigo-500/50 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL SKILLS */}
        <section id="skills" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Code2" className="w-3.5 h-3.5" /> Technical Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Technologies & Competencies
            </h2>
          </div>

          {/* Skill Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
            <button
              onClick={() => setSelectedSkillCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedSkillCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All Categories
            </button>
            {data.skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedSkillCategory === cat.id
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Categorized Skills Grid */}
          <div className="space-y-8">
            {data.skillCategories
              .filter(cat => selectedSkillCategory === 'all' || selectedSkillCategory === cat.id)
              .map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      {category.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {category.description}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl glass-panel glass-card-interactive flex flex-col justify-between space-y-3 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <Icon name={skill.icon} className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SECTION 5: PROJECTS */}
        <section id="projects" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Layers" className="w-3.5 h-3.5" /> Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Software & Practical Prototypes
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Highlights of academic software projects and starter placeholders ready for Mounita's repository links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-3xl glass-panel glass-card-interactive flex flex-col justify-between space-y-6 relative group overflow-hidden"
              >
                {/* Project Number Accent */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-2xl font-extrabold font-mono text-cyan-400/80">
                    {project.number}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                    >
                      <Icon name="Eye" className="w-4 h-4" />
                      View Details
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                          title="View GitHub Repository"
                        >
                          <Icon name="Github" className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                          title="Live Demo"
                        >
                          <Icon name="ExternalLink" className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* PROJECT DETAILS MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0f172a] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl modal-animate relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <Icon name="X" className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Project Detail Overview • {selectedProject.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="font-semibold text-rose-400 font-mono text-xs uppercase block">
                    Problem Statement:
                  </span>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <span className="font-semibold text-emerald-400 font-mono text-xs uppercase block">
                    Technical Solution:
                  </span>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold text-slate-200 font-mono text-xs uppercase block">
                    Key Features:
                  </span>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-slate-300">
                        <Icon name="CheckCircle2" className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-2 transition-colors"
                    >
                      <Icon name="Github" className="w-4 h-4" /> GitHub Repo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 6: EXPERIENCE / LEARNING JOURNEY */}
        <section id="journey" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="TrendingUp" className="w-3.5 h-3.5" /> Learning Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Growth & Milestones Timeline
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Tracing progression from student learner to project builder and future software engineer.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {data.learningJourney.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Stepper Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md shadow-cyan-500/50">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </div>

                <div className="p-6 rounded-3xl glass-panel space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {item.phase}
                      </span>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-800 flex items-center gap-1.5"
                      >
                        <Icon name="Check" className="w-3 h-3 text-cyan-400" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: CERTIFICATIONS */}
        <section id="certifications" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Award" className="w-3.5 h-3.5" /> Certifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Credentials & Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="p-6 rounded-3xl glass-panel flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Icon name="Award" className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-400">
                    {cert.organization}
                  </p>

                  <div className="pt-2 text-xs text-slate-300 space-y-1">
                    <span className="font-mono text-slate-400 text-[11px] uppercase block">Skills Covered:</span>
                    <p>{cert.skillsCovered}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="ExternalLink" className="w-4 h-4" /> View Certificate
                    </a>
                  ) : (
                    <span className="w-full py-2 rounded-xl bg-slate-900 text-slate-500 font-mono text-xs text-center block border border-slate-800">
                      Credential Placeholder
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: ACHIEVEMENTS & ACTIVITIES */}
        <section id="achievements" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Star" className="w-3.5 h-3.5" /> Achievements
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Activities & Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.achievements.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl glass-panel space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name={item.icon} className="w-5 h-5 text-cyan-400 shrink-0" />
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: RESUME */}
        <section id="resume" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="FileText" className="w-3.5 h-3.5" /> Curriculum Vitae
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Resume Preview & Actions
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/20 max-w-3xl mx-auto space-y-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">{data.personal.name}</h3>
                <p className="text-cyan-400 font-mono text-sm">{data.personal.title}</p>
                <p className="text-slate-400 text-xs font-mono">{data.personal.institution} | {data.personal.graduationClass}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-semibold text-sm flex items-center gap-2 transition-colors"
                >
                  <Icon name="Eye" className="w-4 h-4" /> View Resume
                </button>

                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(`RESUME - MOUNITA A S\nB.Tech CSE Student, REVA University (2029)\nEmail: ${data.personal.socials.email}\nGitHub: ${data.personal.socials.github}`)}`}
                  download="Mounita_AS_Resume.txt"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <Icon name="Download" className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300 text-left">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold uppercase">Education</span>
                <p className="text-white font-sans font-medium">B.Tech CSE (REVA)</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold uppercase">Key Languages</span>
                <p className="text-white font-sans font-medium">C, C++, Python, JS</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold uppercase">Expected Grad</span>
                <p className="text-white font-sans font-medium">Class of 2029</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME PREVIEW MODAL */}
        {resumeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0f172a] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-8 shadow-2xl modal-animate relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setResumeModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <Icon name="X" className="w-5 h-5" />
              </button>

              <div className="border-b border-white/10 pb-6 space-y-2 text-center sm:text-left">
                <h3 className="text-3xl font-bold text-white">{data.personal.name}</h3>
                <p className="text-cyan-400 font-mono text-sm">{data.personal.title}</p>
                <p className="text-slate-400 text-xs font-mono">{data.personal.institution} | {data.personal.graduationClass}</p>
              </div>

              <div className="space-y-6 text-sm text-slate-300">
                <div className="space-y-2">
                  <h4 className="font-mono text-cyan-300 font-bold uppercase text-xs tracking-wider border-b border-slate-800 pb-1">
                    Academic Background
                  </h4>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-white">{data.education.institution}</span>
                    <span className="text-xs font-mono text-slate-400">{data.education.duration}</span>
                  </div>
                  <p className="text-xs text-slate-400">{data.education.degree}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-cyan-300 font-bold uppercase text-xs tracking-wider border-b border-slate-800 pb-1">
                    Technical Skills Summary
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    <strong className="text-white">Languages:</strong> C, C++, Python, Java, JavaScript<br/>
                    <strong className="text-white">Web:</strong> HTML, CSS, JavaScript, React, Responsive Web Design<br/>
                    <strong className="text-white">CS Fundamentals:</strong> Data Structures & Algorithms, OOP, OS, Networks, DBMS
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-cyan-300 font-bold uppercase text-xs tracking-wider border-b border-slate-800 pb-1">
                    Representative Projects
                  </h4>
                  {data.projects.map((p, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between font-semibold text-white text-xs">
                        <span>{p.title}</span>
                        <span className="font-mono text-slate-400">{p.tech.join(', ')}</span>
                      </div>
                      <p className="text-xs text-slate-400">{p.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-2"
                >
                  <Icon name="Printer" className="w-4 h-4" /> Print Preview
                </button>
                <button
                  onClick={() => setResumeModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 font-medium text-xs"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 10: GITHUB / CODING PROFILE */}
        <section id="github" className="space-y-10">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-700/60 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-semibold">
                  <Icon name="Github" className="w-4 h-4" /> GitHub Profile & Repositories
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {data.githubSection.headline}
                </h3>
                <p className="text-slate-300 text-sm">
                  {data.githubSection.subtext}
                </p>
              </div>

              <a
                href={data.githubSection.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-semibold text-sm flex items-center gap-2 shrink-0 transition-colors"
              >
                <Icon name="Github" className="w-5 h-5 text-cyan-400" />
                Explore my GitHub
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.githubSection.featuredRepos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 space-y-3 transition-colors block group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-cyan-300 group-hover:text-cyan-200">
                      {repo.name}
                    </span>
                    <Icon name="ExternalLink" className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {repo.description}
                  </p>
                  <span className="inline-block text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {repo.language}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: INTERESTS */}
        <section id="interests" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Sparkles" className="w-3.5 h-3.5" /> Curiosity & Interests
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Areas of Fascination
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.interests.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl glass-panel glass-card-interactive space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Icon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 12: CONTACT */}
        <section id="contact" className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Icon name="Mail" className="w-3.5 h-3.5" /> Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {data.personal.contactHeadline}
            </h2>
            <p className="text-slate-300 text-base max-w-2xl">
              "{data.personal.contactSubtext}"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 p-8 rounded-3xl glass-panel space-y-6">
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Icon name="Send" className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <a
                href={`mailto:${data.personal.socials.email}`}
                className="p-6 rounded-3xl glass-panel glass-card-interactive flex items-center gap-4 block group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon name="Mail" className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Email Direct:</span>
                  <span className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                    {data.personal.socials.email}
                  </span>
                </div>
              </a>

              <a
                href={data.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-3xl glass-panel glass-card-interactive flex items-center gap-4 block group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Icon name="Linkedin" className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">LinkedIn Profile:</span>
                  <span className="font-bold text-white text-sm sm:text-base group-hover:text-indigo-300 transition-colors">
                    Connect on LinkedIn
                  </span>
                </div>
              </a>

              <a
                href={data.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-3xl glass-panel glass-card-interactive flex items-center gap-4 block group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Icon name="Github" className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">GitHub Work:</span>
                  <span className="font-bold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                    github.com/mounita-as
                  </span>
                </div>
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* SECTION 14: FOOTER */}
      <footer className="border-t border-white/10 bg-[#060911] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <h4 className="font-bold text-lg text-white">{data.personal.name}</h4>
            <p className="text-xs font-mono text-slate-400">
              B.Tech CSE Student • {data.personal.institution} • {data.personal.graduationClass}
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href={data.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={data.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${data.personal.socials.email}`} className="hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-500 font-mono">
              © 2026 Mounita A S. All rights reserved.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
            >
              Back to Top <Icon name="ChevronUp" className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Render React App
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

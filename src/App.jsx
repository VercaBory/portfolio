import { useState } from 'react';
import './index.css';

const educationData = [
  {
    id: 1,
    university: "Faculty of Informatics, Masaryk University",
    degree: "Master's in Computer Graphics and Visualization",
    years: "Sep 2023 - Feb 2026",
    place: "Brno, Czechia",
    desc: "Master’s degree in Computer Graphics and Visualization, combining a strong foundation in mathematics, algorithms, and geometric methods with practical experience in visual computing. Specialized coursework included visualization, GPU rendering, neural networks, computer vision, and human-computer interaction.",
    subjects: ["Computer Graphics", "Computer Vision", "Data Visualization", "C++", "C#", "Python", "OpenCV", "OpenGL", "GLSL", "HCI", "Figma", "Game Development", "Unity", "Visual Communication"]
  },
  {
    id: 2,
    university: "Faculty of Arts, Masaryk University",
    degree: "Education Technologies (Selected Coursework)",
    years: "Sep 2024 - Present",
    place: "Brno, Czechia",
    desc: "Selected coursework in learning technologies, online pedagogy, and digital learning design across bachelor's and master's level courses to deepen expertise in technology-enhanced learning.",
    subjects: ["Learning Design", "Educational Technology", "Pedagogy", "Psychology in Education", "Gamification in Education", "Twine", "Figma"]
  },
  {
    id: 3,
    university: "HTWG Hochschule Konstanz",
    degree: "Computer Vision and Graphics (Exchange Programme)",
    years: "2021 - 2022",
    place: "Konstanz, Germany",
    desc: "",
    subjects: ["3D Computer Vision", "Computer Graphics", "OpenCV", "OpenGL", "React", "Mobile Development"]
  },
  {
    id: 4,
    university: "Faculty of Informatics, Masaryk University",
    degree: "Bachelor's in Computer Science",
    years: "2019 - 2023",
    place: "Brno, Czechia",
    desc: "",
    subjects: ["Python", "C", "Java", "MATLAB", "Haskell", "HTML/CSS", "VR Development", "Blender"]
  }
];

const experienceData = [
  {
    id: 1,
    role: "Software Developer",
    company: "GOAL SPORT TECH",
    years: "Oct 2023 - Present",
    place: "Brno, Czechia",
    description: "Conducting R&D in Computer Vision for sports technology applications. Implementing high-performance algorithms to solve complex visual tracking and analysis problems.",
    bullets: [
      "Camera Calibration: Developing and refining advanced mathematical models for high-precision multi-camera systems.",
      "Algorithm Development: Implemented computer vision solutions including player tracking and chroma keying.",
      "Video Production: End-to-end production of instructional video tutorials for video referees (from scenario writing to editing)."
    ],
    skills: ["C++", "Python", "Computer Vision", "Instructional Design", "Research", "Numpy"]
  },
  {
    id: 2,
    role: "Private Tutor (Mathematics & IT)",
    company: "Remote & On-site",
    years: "2017 - Present",
    place: "Various Locations",
    description: "Providing 1-on-1 instruction in Mathematics and Computer Science for primary through university level students. Bridging complex technical concepts for diverse learners.",
    bullets: [
      "Designed custom digital learning materials.",
      "Created instructional graphics and educational videos.",
      "Adapted teaching methodologies for diverse academic levels."
    ],
    skills: ["Mathematics", "STEM", "Pedagogy", "Digital Learning Materials", "Instructional Graphics"]
  },
  {
    id: 3,
    role: "Student Code Reviewer",
    company: "Masaryk University",
    years: "Sep 2021 - Dec 2021",
    place: "Brno, Czechia",
    description: "Evaluated student programming assignments for code quality, efficiency, and adherence to best practices in Computer Science courses.",
    bullets: [
      "Provided constructive, actionable feedback to peers to support learning outcomes.",
      "Ensured adherence to clean code principles."
    ],
    skills: ["Python", "Code Quality Analysis", "Constructive Feedback", "Clean Code"]
  }
];

const projectData = [
  {
    id: 1,
    title: "Interactive EdTech App for Math",
    subtitle: "Master's Thesis | Fall 2025",
    image: "logoFicademy.png",
    description: "Built a gamified Unity application to support university-level mathematics learning, tailored for Computer Graphics students. Designed interactive minigames that seamlessly integrate visual reasoning with symbolic math.",
    demoLink: "https://vercabory.github.io/Ficademy-Demo/",
    link: "https://github.com/VercaBory/Ficademy",
    tags: ["C#", "Unity", "JSON", "Learning Design", "EdTech", "Figma", "Gamification", "Microlearning"]
  },
  {
    id: 2,
    title: "Augmented Reality for LED Screens",
    subtitle: "Bachelor's Thesis | Spring 2023",
    image: "ARled.png",
    description: "Developed an algorithm for digital substitution of real-world LED screen content with virtual overlays in sports broadcasts. Implemented several occlusion detection methods using difference keying, chroma keying, and YOLO-based segmentation.",
    link: "https://github.com/VercaBory/Augmented-Reality-for-LED-Screens",
    tags: ["Python", "OpenCV", "ArUco", "YOLO", "Computer Vision", "AR"]
  },
  {
    id: 3,
    title: "Maze Game in VR",
    subtitle: "Human-Computer Interaction Lab | 2022",
    image: "vr-maze2.png",
    description: "Developed a virtual reality maze game in Unity as part of HCI lab. Designed and implemented core interaction mechanics for immersive navigation and user engagement.",
    link: "#",
    tags: ["Unity", "C#", "Virtual Reality", "HCI"]
  },
  {
    id: 4,
    title: "ShaFlapp",
    subtitle: "Mobile Computing Course | 2021-2022",
    image: "ShaFlapp.png",
    description: "Built an Android application as part of a team project at HTWG Konstanz to support shared household management. Implemented features for organizing tasks, communication, and coordination among flatmates.",
    link: "#",
    tags: ["Android", "Java", "Mobile Development"]
  }
];


function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="section hero">
            <div className="hero-top">
              <div className="hero-text">
                <h2>Bridging the gap between code, visuals, and learning.</h2>
                <p>I am a Software Developer with a background in Computer Vision and Computer Graphics, currently expanding my focus into Educational Technologies. At GOAL SPORT TECH, I work in computer vision research and development. In addition to my core role, I created the company’s video tutorial library, designing and building it from the ground up.</p>
                <p>Building on 9+ years of experience as a 1-on-1 mathematics tutor, I am passionate about creating interactive, visually engaging educational tools—such as my Unity application designed to support university-level mathematics. I enjoy combining technical development with thoughtful design to create impactful, user-centered learning experiences, and I am currently deepening my expertise through specialized EdTech coursework at Masaryk University.</p>
              </div>
              <img src="profile.jpg" alt="Veronika Borýsková" className="profile-photo" />
            </div>

            <div className="hero-bottom">
              <div className="skills-container">
                <div className="skills-title">Core Expertise</div>
                <div className="tag-list" style={{ marginBottom: '1rem', paddingTop: '0' }}>
                  <span className="tag">Computer Graphics</span>
                  <span className="tag">Computer Vision</span>
                  <span className="tag">R&D</span>
                  <span className="tag">Education Technologies</span>
                  <span className="tag">Instructional Design</span>
                  <span className="tag">Data Visualization</span>
                  <span className="tag">XR Development</span>
                </div>

                <div className="skills-title">Technology Stack</div>
                <div className="tag-list" style={{ paddingTop: '0' }}>
                  {(() => {
                    const allSkills = ["C++", "C#", "Python", "JavaScript", "Unity", "Figma", "Twine", "Git", "Docker", "React", "HTML/CSS", "LaTeX", "MATLAB", "OpenCV", "OpenGL"];
                    // "TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn" skipped  for now
                    // Show all if true, otherwise slice the array to only show the first <maxSkillsToShow> items
                    const maxSkillsToShow = 9;
                    const visibleSkills = showAllSkills ? allSkills : allSkills.slice(0, maxSkillsToShow);

                    return (
                      <>
                        {visibleSkills.map(skill => (
                          <span key={skill} className="tag" style={{ backgroundColor: 'white' }}>{skill}</span>
                        ))}

                        {/* The Toggle Button */}
                        <button
                          onClick={() => setShowAllSkills(!showAllSkills)}
                          style={{
                            background: 'none', border: 'none',
                            color: 'var(--terracotta)', cursor: 'pointer',
                            fontSize: '0.85rem', fontWeight: '600',
                            padding: '0.3rem 0.5rem', textDecoration: 'underline'
                          }}
                        >
                          {showAllSkills ? "Show Less" : `+ ${allSkills.length - maxSkillsToShow} More`}
                        </button>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className="skills-container">
                <div className="skills-title">Contact & Links</div>
                <div className="contact-links">
                  <a href="mailto:verboryskova@gmail.com" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Email Me
                  </a>
                  <a href="https://linkedin.com/in/veronika-boryskova" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/VercaBory" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="section">
            <h2 className="section-title">Education</h2>
            <div className="grid">
              {educationData.map(edu => (
                <div className="card" key={edu.id}>
                  <div className="card-content">
                    <h3 className="card-title">{edu.degree}</h3>
                    <div className="card-subtitle">
                      <span>{edu.university}</span>
                      <span>{edu.years}</span>
                    </div>
                    <p className="card-desc" style={{ color: 'var(--deep-teal)', fontWeight: '600' }}>📍 {edu.place}</p>
                    {edu.desc && <p className="card-desc">{edu.desc}</p>}
                    <div className="tag-list">
                      {edu.subjects.map((sub, index) => <span key={index} className="tag">{sub}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="grid">
              {experienceData.map(job => (
                <div className="card" key={job.id}>
                  <div className="card-content">
                    <h3 className="card-title">{job.role}</h3>
                    <div className="card-subtitle">
                      <span>{job.company}</span>
                      <span>{job.years}</span>
                    </div>
                    <p className="card-desc" style={{ color: 'var(--deep-teal)', fontWeight: '600' }}>📍 {job.place}</p>
                    <div className="card-desc">
                      {job.description}
                      {job.bullets && (
                        <ul>
                          {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                        </ul>
                      )}
                    </div>
                    <div className="tag-list">
                      {job.skills.map((skill, index) => <span key={index} className="tag">{skill}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
      case 'projects':
        return (
          <div className="section">
            <h2 className="section-title">Selected Projects</h2>
            <div className="grid">
              {projectData.map(proj => (
                <div className="card" key={proj.id}>
                  <img src={proj.image} alt={proj.title} className="project-image" />
                  <div className="card-content">
                    <h3 className="card-title">{proj.title}</h3>
                    <div className="card-subtitle" style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{proj.subtitle}</div>
                    <p className="card-desc">{proj.description}</p>
                    <div className="tag-list">
                      {proj.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                    {/* Container for multiple links side-by-side */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>

                      {proj.demoLink && (
                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="card-link" style={{ marginTop: 0 }}>
                          Try Interactive Demo &rarr;
                        </a>
                      )}

                      {proj.link && proj.link !== "#" && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="card-link" style={{ marginTop: 0 }}>
                          View Project &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Veronika Borýsková</h1>
        <div className="header-subtitle">Software Developer & Learning Designer</div>
        <nav>
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Profile</button>
          <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
          <button className={activeTab === 'education' ? 'active' : ''} onClick={() => setActiveTab('education')}>Education</button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
        </nav>
      </header>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
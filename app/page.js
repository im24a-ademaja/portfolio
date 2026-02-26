export default function Home() {
    return (
        <div className="wrapper">
            {/* Hintergrund-Animation */}
            <ul className="bubbles">
                <li style={{ left: "10%", width: 80, height: 80, animationDelay: "0s" }} />
                <li style={{ left: "25%", width: 40, height: 40, animationDelay: "2s" }} />
                <li style={{ left: "70%", width: 110, height: 110, animationDelay: "4s" }} />
                <li style={{ left: "85%", width: 60, height: 60, animationDelay: "1s" }} />
            </ul>

            <Header />

            <main>
                <Section title="Wer bin ich?" color="var(--red)" text="Ich bin ein leidenschaftlicher Entwickler mit einem Auge für Details und moderne Web-Technologien." />

                <Section title="Sprachkenntnisse" color="var(--highlight)">
                    <SkillBars />
                </Section>

                <Projects />

                <Section title="Kontakt" color="var(--purple)" id="kontakt">
                    <p>Lass uns zusammen etwas Großartiges erschaffen!</p>
                    <a href="mailto:deine@email.de" className="btn-contact">Schreib mir eine Mail</a>
                </Section>
            </main>

            <footer>
                <p>© {new Date().getFullYear()} — Dein Name</p>
            </footer>
        </div>
    );
}

/* --- Komponenten --- */

function Header() {
    return (
        <header>
            <div className="profile-blob" />
            <h1>Dein Name</h1>
            <p className="subtitle">Entwickler & Gestalter</p>
        </header>
    );
}

function Section({ title, text, color, children, id }) {
    return (
        <section id={id} style={{ "--accent": color }}>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            {children}
        </section>
    );
}

function SkillBars() {
    const skills = [
        { name: "SQL", level: 85, color: "var(--purple)" },
        { name: "HTML/CSS", level: 75, color: "var(--red)" },
        { name: "JavaScript", level: 75, color: "var(--highlight)" },
        { name: "React", level: 75, color: "var(--emerald)" },
        { name: "Python", level: 60, color: "var(--orange)" },
    ];

    return (
        <div className="skills-container">
            {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                    <div className="skill-info">
                        <span>{skill.name}</span>
                        <span className="skill-num">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${skill.level}%`,
                                backgroundColor: skill.color,
                                boxShadow: `0 0 15px ${skill.color}`
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function Projects() {
    const projects = [
        { title: "DOCX → PDF-Converter", desc: "Einfacher Converter gebaut mit LibreOffice.", tag: "Web" },
        { title: "Münzen-Ratspiel", desc: "Minispiel, indem man raten muss, ob eine Münze echt oder gefälscht ist.", tag: "Web" }
    ];

    return (
        <section style={{ "--accent": "var(--yellow)" }}>
            <h2>Projekte</h2>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div className="project-card" key={i}>
                        <span className="card-tag">{p.tag}</span>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef, forwardRef } from 'react';

export default function Home() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

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
                <Section 
                    title="Wer bin ich?" 
                    color="var(--red)" 
                    text="Ich bin ein leidenschaftlicher Entwickler
                    mit Fokus auf moderne Web-Technologien.
                    Mit Erfahrung in React, Node.js und mehr erstelle ich benutzerfreundliche Anwendungen.
                    Lassen Sie uns gemeinsam Projekte umsetzen!"
                    ref={(el) => (sectionRefs.current[0] = el)}
                />

                <Section 
                    title="Sprachkenntnisse" 
                    color="var(--highlight)"
                    ref={(el) => (sectionRefs.current[1] = el)}
                >
                    <SkillBars />
                </Section>

                <Projects ref={(el) => (sectionRefs.current[2] = el)} />

                <Section 
                    title="Kontakt" 
                    color="var(--purple)" 
                    id="kontakt"
                    ref={(el) => (sectionRefs.current[3] = el)}
                >
                    <p>Lass uns zusammen etwas Großartiges erschaffen!</p>
                    <a href="mailto:deine@email.de" className="btn-contact">Schreib mir eine Mail</a>
                </Section>
            </main>

            <footer>
                <p>© {new Date().getFullYear()} — Arbi Ademaj</p>
            </footer>
        </div>
    );
}

/* --- Komponenten --- */

function Header() {
    return (
        <header>
            <div className="profile-blob" />
            <h1>Arbi Ademaj</h1>
            <p className="subtitle">Entwickler & Gestalter</p>
        </header>
    );
}

const Section = forwardRef(({ title, text, color, children, id }, ref) => {
    return (
        <section id={id} style={{ "--accent": color }} ref={ref}>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            {children}
        </section>
    );
});

Section.displayName = 'Section';

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

const Projects = forwardRef((props, ref) => {
    const projects = [
        { title: "DOCX → PDF-Converter", desc: "Einfacher Converter gebaut mit LibreOffice.", tag: "Web" },
        { title: "Münzen-Ratspiel", desc: "Minispiel, indem man raten muss, ob eine Münze echt oder gefälscht ist.", tag: "Web" }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 1.0 }
        );

        const currentRefs = cardRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section style={{ "--accent": "var(--yellow)" }} ref={ref}>
            <h2>Projekte</h2>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div 
                        className="project-card" 
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                    >
                        <span className="card-tag">{p.tag}</span>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

"use client";

import { useEffect, useRef, forwardRef } from 'react';
import Image from 'next/image';
import Projects from './components/Projects';

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

            <div className="header-buttons">
                <a href="https://github.com/im24a-ademaja" target="_blank" className="btn-github">
                    GitHub
                </a>
                <a href="mailto:arbi.ademaj1@icloud.com" className="btn-mail">
                    E-Mail
                </a>
            </div>

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
                    <p>Lass uns zusammen etwas Grossartiges erschaffen!</p>
                    <a href="mailto:arbi.ademaj1@icloud.com" className="btn-contact">Schreib mir eine Mail</a>
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
        { name: "SQL", level: 80, color: "var(--purple)", url: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
        { name: "HTML/CSS", level: 75, color: "var(--red)", url: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "JavaScript", level: 65, color: "var(--highlight)", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "React", level: 60, color: "var(--emerald)", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Python", level: 60, color: "var(--orange)", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    ];

    const getSkillDescription = (level) => {
        if (level <= 60) return "Grundkenntnisse";
        if (level <= 75) return "Fortgeschrittene Kenntnisse";
        return "Expertenkenntnisse";
    };

    return (
        <div className="skills-container">
            {skills.map((skill, i) => (
                <div key={i} className="skill-item">
                    <Image 
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="skill-logo"
                    />
                    <span className="skill-description">{getSkillDescription(skill.level)}</span>
                </div>
            ))}
        </div>
    );
}

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            title: "Münzen-Quiz",
            description: "Als Projekt mit Zusammenhang zur Wirtschaft hatten mein Teamkollege und ich die Idee, ein Segment einzubauen, in dem man raten muss, ob eine angezeigte Münze echt oder gefälscht ist. Das Ganze habe ich mithilfe von JS/JSON umsetzen können. Dabei war es uns wichtig, das Thema auf eine spielerische Art zu vermitteln und gleichzeitig das Interesse an wirtschaftlichen Zusammenhängen zu fördern.",
            image: '/globe.svg',
            link: 'https://im24a-burtonp.github.io/PrWR-Projekt/quiz.html',
        },
        {
            title: "PDF-Converter",
            description: "Nachdem ich lange nach einer kreativen Einzelprojektidee gesucht habe, fiel mir die Idee eines PDF-Converters ein. Insgesamt wollte ich das umsetzen, um meine Fähigkeiten mit Javascript ein wenig ausbauen zu können. Das war alles mithilfe von LibreOffice möglich.\n\nBis jetzt habe ich das Projekt noch nirgends gehostet.",
            image: '/file.svg',
            link: null,
        },
    ];

    const [modal, setModal] = useState(null);

    return (
        <section style={{ "--accent-color": "var(--yellow)" }} className="visible">
            <h2>Projekte</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card visible"
                        style={{ cursor: 'pointer', textDecoration: 'none' }}
                        onClick={() => setModal(index)}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <Image src={project.image} alt={project.title} width={48} height={48} />
                            <h3 style={{ margin: 0 }}>{project.title}</h3>
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
                            {project.description.slice(0, 60)}...
                        </p>
                    </div>
                ))}
            </div>
            {modal !== null && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', zIndex: 100000
                }} onClick={() => setModal(null)}>
                    <div style={{ background: '#1e293b', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 400, color: '#fff', position: 'relative', zIndex: 100001, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)', marginTop: '40px', marginRight: '360px' }} onClick={e => e.stopPropagation()}>
                        <button onClick={() => setModal(null)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', zIndex: 100002 }}>&times;</button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                            <Image src={projects[modal].image} alt={projects[modal].title} width={48} height={48} />
                            <h3 style={{ margin: 0 }}>{projects[modal].title}</h3>
                        </div>
                        <p style={{ whiteSpace: 'pre-line', marginBottom: 16 }}>{projects[modal].description}</p>
                        {projects[modal].link && (
                            <a href={projects[modal].link} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Zum Projekt</a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
export default function Projects() {
    const projects = [
        {
            title: "Portfolio V1",
            description: "Dieses moderne Design mit Glas-Effekt.",
        },
        {
            title: "Skript-Tool",
            description: "Automatisierung von Workflows mit Python.",
        },
    ];

    return (
        <section style={{ "--accent-color": "var(--yellow)" }}>
            <h2>Projekte</h2>

            <div className="grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default function Header() {
    return (
        <header>
            <div className="profile-placeholder" />
            <h1>Dein Name</h1>
            <p style={{ color: "var(--text-dim)" }}>
                Entwickler & Gestalter
            </p>
            <a href="#kontakt" className="btn-contact">
                Kontaktiere mich
            </a>
        </header>
    );
}

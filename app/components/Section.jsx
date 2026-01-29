export default function Section({ title, text, list, color }) {
    return (
        <section style={{ "--accent-color": color }}>
            <h2>{title}</h2>

            {text && <p>{text}</p>}

            {list && (
                <ul>
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}

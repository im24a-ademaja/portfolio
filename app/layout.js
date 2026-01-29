import "./globals.css";

export const metadata = {
    title: "Portfolio | Entwickler & Gestalter",
    description: "Modernes Portfolio mit Next.js und Glassmorphismus",
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
        </html>
    );
}
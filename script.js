/* Grundlegende Stildefinitionen */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333; /* Wird durch Sektions-Farben überschrieben */
    overflow-x: hidden; /* Verhindert horizontales Scrollen */
    background-color: #0f0f23; /* Grund-Hintergrundfarbe */
    min-height: 100vh; /* Stellt sicher, dass der Body mindestens die volle Viewport-Höhe hat */
    padding-top: 5rem; /* Mehr Platz am Anfang */
    padding-bottom: 5rem;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9); /* Dunkler, transparenter Hintergrund */
    backdrop-filter: blur(10px); /* Glas-Effekt */
    z-index: 1000;
    padding: 1rem 2rem;
    transition: all 0.3s ease;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    /* Gradient für den Text */
    background: linear-gradient(135deg, #00d4ff 0%, #9b59b6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a:hover {
    color: #00d4ff; /* Farbänderung beim Hover */
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    /* Gradient für den Unterstrich */
    background: linear-gradient(135deg, #00d4ff, #9b59b6);
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%; /* Unterstrich füllt sich beim Hover */
}

/* Hero Section (Startseite) */
.hero {
    height: 100vh;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%); /* Dunkler Gradient-Hintergrund */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    padding-top: 5rem; /* Platz für den Header */
}

.hero::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    /* SVG-Hintergrund mit Code-Symbolen */
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="code" width="20" height="20" patternUnits="userSpaceOnUse"><text x="2" y="8" fill="rgba(0,212,255,0.1)" font-size="8" font-family="monospace">&lt;/&gt;</text><text x="2" y="18" fill="rgba(155,89,182,0.1)" font-size="6" font-family="monospace">{}</text></pattern></defs><rect width="100" height="100" fill="url(%23code)"/></svg>');
    animation: codeFloat 25s linear infinite; /* Animation für die schwebenden Symbole */
}

@keyframes codeFloat {
    0% { transform: translateX(-50px) translateY(-50px); }
    100% { transform: translateX(-100px) translateY(-100px); }
}

.hero-content {
    position: relative;
    z-index: 2; /* Über den Hintergrund-Symbolen */
    max-width: 800px;
    animation: fadeInUp 1s ease-out; /* Start-Animation */
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    /* Gradient für den Titel-Text */
    background: linear-gradient(135deg, #00d4ff 0%, #9b59b6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.typing-text {
    font-family: 'Courier New', monospace; /* Monospace-Schriftart für Typing-Effekt */
    border-right: 2px solid #00d4ff; /* Cursor */
    animation: blink 1s infinite; /* Cursor-Blinken */
}

@keyframes blink {
    0%, 50% { border-color: transparent; }
    51%, 100% { border-color: #00d4ff; }
}

/* Skills Section */
.skills {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); /* Passender Hintergrund */
    color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    /* Gradient für den Sektions-Titel */
    background: linear-gradient(135deg, #00d4ff 0%, #9b59b6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.skill-card {
    background: rgba(255, 255, 255, 0.05); /* Leichter transparenter Hintergrund */
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
    border: 2px solid transparent;
    backdrop-filter: blur(10px); /* Glas-Effekt */
}

.skill-card:hover {
    transform: translateY(-10px) scale(1.05); /* Hoch und leicht größer */
    background: rgba(0, 212, 255, 0.1); /* Leichte Farbänderung beim Hover */
    border-color: #00d4ff; /* Blauer Rand */
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3); /* Blauer Schatten */
}

.skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
    transform: rotateY(360deg); /* 3D-Rotation beim Hover */
}

.skill-name {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0; /* Standardmäßig unsichtbar */
    transform: translateY(10px); /* Von unten einfahren */
    transition: all 0.3s ease;
}

.skill-card:hover .skill-name {
    opacity: 1; /* Sichtbar beim Hover */
    transform: translateY(0);
}

/* Project Idea Generator Section */
.project-generator {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%); /* Passender Hintergrund */
    color: white;
    text-align: center;
}
.project-generator textarea {
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 1rem;
    resize: vertical;
    outline: none;
    transition: border-color 0.3s ease;
}
.project-generator textarea:focus {
    border-color: #00d4ff;
}
.project-generator button {
    background: linear-gradient(135deg, #00d4ff, #9b59b6);
    color: white;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}
.project-generator button:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
}
#generated-idea-output {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: #ccc;
    font-size: 1.1rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
#loading-indicator, #error-message {
    margin-top: 1rem;
    font-size: 0.9rem;
}
#loading-indicator {
    color: #00d4ff;
}
#error-message {
    color: #ff6b6b;
}

/* Projects Section (Optional, falls vorhanden) */
.projects {
    padding: 5rem 2rem;
    background: #0f0f23; /* Passender Hintergrund */
    color: white;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
}

.project-image {
    height: 200px;
    background: linear-gradient(135deg, #00d4ff, #9b59b6); /* Gradient für Platzhalterbilder */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    position: relative;
    color: white;
}

.project-content {
    padding: 1.5rem;
}

.project-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #00d4ff;
}

.project-description {
    color: #ccc;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background: rgba(0, 212, 255, 0.2);
    color: #00d4ff;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 212, 255, 0.3);
}

/* Contact Section (Handy-Bereich) */
.contact {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%);
    color: white;
    display: flex;
    flex-direction: column; /* Für Titel und Handy */
    justify-content: center;
    align-items: center;
}

.contact-section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #00d4ff 0%, #9b59b6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2; /* Über dem Handy-Layer */
}

.phone-container {
    position: relative;
    animation: phoneFloat 3s ease-in-out infinite;
}

@keyframes phoneFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.phone {
    width: 280px; /* Breite des Handys */
    height: 560px; /* Höhe des Handys */
    background: linear-gradient(135deg, #2c3e50, #34495e); /* Körper des Handys */
    border-radius: 40px; /* Abgerundete Ecken des Handys */
    padding: 15px; /* Abstand zwischen Rahmen und Bildschirm */
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1); /* Schatten und Innenschatten */
    border: 5px solid #444; /* Rahmenfarbe */
    display: flex; /* Für den Bildschirm im Inneren */
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Sicherstellen, dass nichts überläuft */
}

.phone::before {
    content: ''; /* Notch/Lautsprecher */
    position: absolute;
    top: 25px; /* Position des Lautsprechers */
    left: 50%;
    transform: translateX(-50%);
    width: 80px; /* Breite des Lautsprechers */
    height: 8px; /* Höhe des Lautsprechers */
    background: #666;
    border-radius: 4px;
    z-index: 2;
}

/* Der untere Button (Home-Button) des Handys */
.phone::after {
    content: ''; 
    position: absolute;
    bottom: 20px; /* Position des Buttons */
    left: 50%;
    transform: translateX(-50%);
    width: 60px; /* Größe des Buttons */
    height: 60px;
    border: 3px solid #666;
    border-radius: 50%; /* Runder Button */
    background: rgba(0,0,0,0.2); /* Leicht transparent */
    z-index: 2;
}

.phone-screen {
    width: calc(100% - 30px); /* Bildschirmbreite (gesamt - padding) */
    height: calc(100% - 70px); /* Bildschirmhöhe (gesamt - padding - notch/home button space) */
    background: url('https://placehold.co/500x1000/1e1e3b/e0e0e0?text=Projects+on+Mobile') center center / cover no-repeat; /* Hintergrundbild für den Bildschirm */
    border-radius: 30px; /* Passend zum Rahmen abgerundet */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 1; /* Unter dem Notch/Home-Button */
}
/* Optional: Ein überlagerndes Muster auf dem Bildschirm */
.phone-screen::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,212,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.5; /* Leichte Transparenz für das Muster */
    z-index: 0; /* Hinter dem Inhalt */
}


.contact-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #00d4ff, #9b59b6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    z-index: 2;
}

.contact-icons {
    display: flex;
    gap: 2rem;
    position: relative;
    z-index: 2;
    margin-top: auto; /* Push icons to bottom of screen */
    margin-bottom: 2rem;
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: rgba(0, 212, 255, 0.1);
    border: 2px solid #00d4ff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #00d4ff;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    backdrop-filter: blur(10px);
}

.contact-icon:hover {
    background: linear-gradient(135deg, #00d4ff, #9b59b6);
    color: white;
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 212, 255, 0.4);
    border-color: transparent;
}

/* Tooltip für Kontakt-Icons */
.contact-icon::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -50px; /* Position über dem Icon */
    left: 50%;
    transform: translateX(-50%) translateY(-10px) scale(0.8);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 10;
}

.contact-icon:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-70px) scale(1); /* Bewegung und Sichtbarkeit beim Hover */
}

/* Footer */
.footer {
    background: #000;
    color: white;
    padding: 2rem;
    text-align: center;
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
    .nav-links {
        display: none; /* Navigation bei kleinen Bildschirmen ausblenden */
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.1rem;
    }

    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .skill-card {
        padding: 1.5rem 1rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .phone {
        width: 240px; /* Kleineres Handy auf Mobil */
        height: 480px;
        padding: 10px;
    }
    .phone::before {
        top: 20px;
        width: 60px;
        height: 6px;
    }
    .phone::after {
        bottom: 15px;
        width: 50px;
        height: 50px;
    }
    .phone-screen {
        border-radius: 25px;
        padding: 1.5rem;
    }

    .contact-icons {
        gap: 1.5rem;
    }

    .contact-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }
}

/* Allgemeine Animationen */
html {
    scroll-behavior: smooth; /* Sanftes Scrollen */
}

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

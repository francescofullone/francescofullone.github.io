// Header- und Footer-Komponenten definieren
const headerHTML = `
    <header>
        <nav>
            <div class="logo">
                <a href="index.html">MeinPortfolio</a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="projekte.html" id="nav-projekte">Projekte</a></li>
                <li><a href="zertifikate.html" id="nav-zertifikate">Zertifikate</a></li>
            </ul>
        </nav>
    </header>
`;

const footerHTML = `
    <footer>
        <p>&copy; 2026 - Francesco Fullone. Alle Rechte vorbehalten. | <a href="impressum.html" style="color: var(--text-muted); text-decoration: underline;">Impressum</a></p>
    </footer>
`;

// Elemente einfügen sobald das DOM geladen ist
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById('header-plugin')) {
        document.getElementById('header-plugin').innerHTML = headerHTML;
        
        // Aktiven Navigationslink markieren
        const path = window.location.pathname;
        const page = path.split("/").pop();
        if (page === "index.html" || page === "") document.getElementById('nav-home').classList.add('active');
        if (page === "projekte.html" || page === "projekt-detail.html") document.getElementById('nav-projekte').classList.add('active');
        if (page === "zertifikate.html") document.getElementById('nav-zertifikate').classList.add('active');
    }
    
    if(document.getElementById('footer-plugin')) {
        document.getElementById('footer-plugin').innerHTML = footerHTML;
    }
});

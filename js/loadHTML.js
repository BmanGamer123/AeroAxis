fetch('html/nav.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('navHTML').innerHTML = html;
});

fetch('html/hero.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('heroHTML').innerHTML = html;
});

fetch('html/footer.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('footerHTML').innerHTML = html;
});

fetch('html/cta.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('ctaHTML').innerHTML = html;
});

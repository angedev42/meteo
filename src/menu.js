export function createMenu() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="navbar">
      <a href="index.html" class = "logo">
        <img src= "https://www.ot-lesherbiers.fr/wp-content/themes/ot-pays-des-herbiers/assets/src/images/logo.svg">  
      </a>
      <ul class="nav-links">
        <li><a href="activites.html">Activités</a></li>
        <li><a href="agenda.html">Agenda</a></li>
        <li><a href="logements.html">Logements</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
}

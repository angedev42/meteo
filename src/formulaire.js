export function injectContactForm() {
  const contactSection = document.getElementById('contact');

  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Formulaire de contact</h3>
    <label for="nom">Votre nom</label>
    <input type="text" id="nom" name="nom" required />

    <label for="email">Votre email</label>
    <input type="email" id="email" name="email" required />

    <label for="message">Message :</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Envoyer</button>
    <p id="form-message" style="display: none;"></p>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulation de l'envoi du formulaire
    const message = document.getElementById('form-message');
    message.textContent = "Votre message a bien été envoyé. Merci !";
    message.style.display = 'block';

    form.reset(); // Réinitialise le formulaire
  });

  contactSection.appendChild(form);
}

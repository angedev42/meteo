import './style.css';
import { getWeatherData } from './api.js';
import { display7DayForecast } from './weather.js';
import { loadEvents } from './events';
import { createMenu } from './menu';
import { injectContactForm } from './formulaire';

createMenu(); // Ajoute le menu en haut de la page

getWeatherData().then(data => {
  if (data) {
    display7DayForecast(data);
  }
});

injectContactForm();

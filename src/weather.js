const weatherCodeToIcon = {
  0: '☀️',    
  1: '🌤️',   
  2: '⛅',    
  3: '☁️',    
  45: '🌫️',  
  48: '🌫️',  
  51: '🌦️', 
  53: '🌧️',  
  55: '🌧️',  
  61: '🌦️', 
  63: '🌧️',  
  65: '🌧️', 
  71: '❄️',  
  73: '❄️',  
  75: '❄️', 
  80: '🌧️', 
  95: '⛈️', 
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
}

export function display7DayForecast(data) {
  const container = document.getElementById('meteo');
  if (!container || !data?.daily) return;

  const dates = data.daily.time;
  const tempMax = data.daily.temperature_2m_max;
  const tempMin = data.daily.temperature_2m_min;
  const codes = data.daily.weathercode;

  let html = `<div class="weather-week">`;

  for (let i = 0; i < 7; i++) {
    const date = formatDate(dates[i]);
    const icon = weatherCodeToIcon[codes[i]] || '❓';
    html += `
      <div class="weather-day">
        <div class="day">${date}</div>
        <div class="icon">${icon}</div>
        <div class="temps">
          <span class="max">${tempMax[i]}°</span> /
          <span class="min">${tempMin[i]}°</span>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

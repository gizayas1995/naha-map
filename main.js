
const map = L.map('map').setView([26.2122, 127.7129], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Spot example
L.marker([26.2122, 127.7129]).addTo(map)
  .bindPopup('ハンタガー水源').openPopup();

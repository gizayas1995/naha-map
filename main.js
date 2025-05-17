
const map = L.map('map').setView([26.2119, 127.7127], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Character selection
let selectedCharacter = null;

function selectCharacter(name) {
  selectedCharacter = name;
  document.getElementById("character-modal").style.display = "none";

  const icon = L.icon({
    iconUrl: 'img/' + name + '.png',
    iconSize: [48, 48],
    iconAnchor: [24, 24]
  });

  L.marker([26.2119, 127.7127], { icon: icon }).addTo(map)
    .bindPopup("ここがハンタガー！");
}

window.onload = () => {
  document.getElementById("character-modal").style.display = "flex";
}

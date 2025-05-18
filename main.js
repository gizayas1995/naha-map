
const map = L.map('map').setView([26.2119, 127.7127], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let selectedCharacter = null;

function selectCharacter(name) {
  selectedCharacter = name;
  document.getElementById("character-modal").style.display = "none";

  const icon = L.icon({
    iconUrl: 'img/' + name + '.png',
    iconSize: [128, 128],
    iconAnchor: [24, 24]
  });

  L.marker([26.2119, 127.7127], { icon: icon }).addTo(map)
    .bindPopup("This is Hantagā!").openPopup();
}

window.onload = () => {
  document.getElementById("character-modal").style.display = "flex";
};

// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "un dia viniste a mi y sonreiste", time: 10 },
  { text: "poco a poco mi corazonse enamoro de ti", time: 20 },
  { text: "en una noche oscura como una estrella que", time: 27 },
  { text: "brilla intensamente", time: 32 },
  { text: "tu radiante presencia deslumbra mis ojos", time: 33 },
  { text: "quiero abrazarte fuerte, como una calida primavera", time: 37 },
  { text: "siempre sonriendo alegremente", time: 37 },
  { text: "sosteniendo mi corazon", time: 40 },
  { text: "te confiezo, mi adorable amante", time: 49 },
  { text: "eres tu con quien he soñado", time: 57 },
  { text: "te confieso, mi corazon encuentra consuelo", time: 700 },
  { text: "eres tu con quien he soñado", time: 80 },
  { text: "dando un paso mas serca de ti.", time: 87 },
  { text: "en una noche oscura como una estrella que", time: 94 },
  { text: "tu radiante presencia deslumbra mis ojos", time: 97 },
  { text: "al igual que la sueve luz de la luna que brilla a travez ", time: 114 },
  { text: "de la larga oscuridad, quiero abrazarte cerca", time: 128 },
  { text: "llenando mi corazon de calidez", time: 139 },
  { text: "te confiezo, mi hermoza negris", time: 145 },
  { text: "eres tu con quien quiero estar", time: 151 },
  { text: "tu amor es un dulce sueño", time: 133 },
  { text: " tus abrazos mi cura", time: 140 },
  { text: " tus besos mi pasion", time: 150 },
  { text: " tus risas mi alegria", time: 160 },
  { text: "tus locuras mi distraccion", time: 170 },
  { text: "no solo te quiero, he llegado a sentir que..", time: 175 },
  { text: "TE AMO.", time: 180 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
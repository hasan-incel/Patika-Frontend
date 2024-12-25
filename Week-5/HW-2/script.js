const sounds = {
  A: new Audio("Sources/boom.wav"),
  S: new Audio("Sources/clap.wav"),
  D: new Audio("Sources/hihat.wav"),
  F: new Audio("Sources/kick.wav"),
  G: new Audio("Sources/openhat.wav"),
  H: new Audio("Sources/ride.wav"),
  J: new Audio("Sources/snare.wav"),
  K: new Audio("Sources/tink.wav"),
  L: new Audio("Sources/tom.wav"),
};

// Fonksiyon: Ses çal
function playSound(key) {
  sounds[key].play();
  animateButton(key);
}

// Fonksiyon: Tuş animasyonu ekle
function animateButton(key) {
  const button = document.getElementById(key);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

// Tıklama olaylarını dinle
const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.id;
    playSound(key);
  });
});

// Klavye tuşları ile tetikleme
document.addEventListener("keydown", function (event) {
  if (sounds[event.key.toUpperCase()]) {
    playSound(event.key.toUpperCase());
  }
});

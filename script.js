let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let question = document.getElementById("question");

let noSize = 1;
let yesSize = 1;

let phrases = [
  "Euh… tu t'es trompée là...",
  "Wsh c’est bizarre… ça bug non ? 🤔",
  "Tu veux vraiment pas :(?",
  "bon je vais plus te laisser le choix."


];

let clickCount = 0;

noBtn.addEventListener("click", () => {
  noSize -= 0.1;
  yesSize += 0.1;

  noBtn.style.transform = `scale(${noSize})`;
  yesBtn.style.transform = `scale(${yesSize})`;

  if (clickCount < phrases.length) {
    question.textContent = phrases[clickCount];
    clickCount++;
  }
});

yesBtn.addEventListener("click", () => {
  alert("Bonne réponse mon coeur 😌💖 ");
});

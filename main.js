document.addEventListener("keyup", (event) => {
  if (event.keyCode === 83) {
    const player1Active = document.querySelector("#player1-race .active");
    const start = document.querySelector("#player1-race #start");
    const nextElement = player1Active.nextElementSibling;
    if (nextElement) {
      player1Active.classList.remove("active");
      nextElement.classList.add("active");
    } else {
      alert("Of course I'm winning my own games !");
      player1Active.classList.remove("active");
      start.classList.add("active");
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 76) {
    const player2Active = document.querySelector("#player2-race .active");
    const nextElement = player2Active.nextElementSibling;
    const lastElement = player2Active.previousElementSibling;
    const blockingElement = document.querySelector("#player2-race .back");
    if (nextElement === blockingElement) {
      player2Active.classList.remove("active");
      lastElement.classList.add("active");
    } else if (nextElement) {
      player2Active.classList.remove("active");
      nextElement.classList.add("active");
    } else {
      alert("I can write whatever, you can't win !");
    }
  }
});

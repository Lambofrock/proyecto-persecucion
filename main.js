const heroe = document.getElementById("heroe");

heroe.classList.add("heroe");

let moveBy = 50;
heroe.style.top = 0;
heroe.style.left = 0;
let puntos = 1;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      heroe.style.left = parseInt(heroe.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      heroe.style.left = parseInt(heroe.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      heroe.style.top = parseInt(heroe.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      heroe.style.top = parseInt(heroe.style.top) + moveBy + "px";
      break;
  }

  if (heroe.style.left === "-50px") {
    console.log("intenta salir del borde del lado");
    heroe.style.left = "450px";
  }
  if (heroe.style.top === "-50px") {
    console.log("intenta del borde de arriba");
    heroe.style.top = "450px";
  }
  if (heroe.style.top === "500px") {
    console.log("salio del borde de abajos");
    heroe.style.top = "0px";
  }
  if (heroe.style.left === "500px") {
    console.log("salio del borde del lado");
    heroe.style.left = "0px";
  }

  function chocar(heroe, villano) {
    console.log(heroe.style.top);
  }
});

//--------------------------------------------------villano--------------------------------------/
const villano = document.getElementById("villano");

villano.classList.add("villano");

villano.style.top = 0;
villano.style.left = 0;
let VmoveBy = 50;


setInterval(function () {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let b = getRandomInt(4);

  if (b === 0) {
    // console.log(b + " es 0");
    villano.style.left = parseInt(villano.style.left) - VmoveBy + "px";
  } else if (b === 1) {
    villano.style.left = parseInt(villano.style.left) + VmoveBy + "px";
    // console.log(b + " es 1");
  } else if (b === 2) {
    // console.log(b + " es 2"),
    villano.style.top = parseInt(villano.style.top) + VmoveBy + "px";
  } else {
    villano.style.top = parseInt(villano.style.top) + VmoveBy + "px";
    // console.log(b + " es 3");
  }

  if (villano.style.left === "-50px") {
    console.log("intenta salir del borde del lado");
    villano.style.left = "450px";
  }
  if (villano.style.top === "-50px") {
    console.log("intenta del borde de arriba");
    villano.style.top = "450px";
  }
  if (villano.style.top === "500px") {
    console.log("salio del borde de abajos");
    villano.style.top = "0px";
  }
  if (villano.style.left === "500px") {
    console.log("salio del borde del lado");
    villano.style.left = "0px";
  }
}, 200);


let scrore = document.getElementById("score")



document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    if (villano.style.top === heroe.style.top) {
      console.log("solo 1 calza");
      if (villano.style.left === heroe.style.left) {
        villano.style.left = parseInt(villano.style.left) + VmoveBy + "px"; villano.style.left = parseInt(villano.style.left) + VmoveBy + "px";
        console.log("todo calza perrin");
         scrore.textContent = `puntos: ${puntos++}`
      
      }
    } else {
      console.log("nada");
    }
  
  }
})
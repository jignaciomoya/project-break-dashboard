const body = document.body;
const pictures = [
    "./images/bosque_otoño.jpg",
    "./images/caminito.jpg",
    "./images/cielo_guay.jpg",
    "./images/lago.jpg",
    "./images/hojas_moradas.jpg",
];

const liveBackground = () =>{
    const random = Math.floor(Math.random() * photos.length);
    backgroundPic = pictures[random]
    body = `url(${backgroundPic})`;
  }

  setInterval(() => {
    liveBackground()
  }, 25000)

  liveBackground();

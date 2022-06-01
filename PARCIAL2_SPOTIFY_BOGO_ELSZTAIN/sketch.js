let nombresImagenes = [
  "CalvinHarris.png",
  "ChrisBrown.png",
  "DaddyYankee.png",
  "DJKhaled.png",
  "DJSnake.png",
  "EdSheeran.png",
  "JonasBrothers.png",
  "Khalid.png",
  "Kygo.png",
  "LewisCapaldi.png",
  "Lizzo.png",
  "Mabel.png",
  "MarkRonson.png",
  "MaroonFive.png",
  "Marshmello.png",
  "R3HAB.png",
  "SamSmith.png",
  "SelenaGomez.png",
  "SHAED.png",
  "ShawnMendes.png",
  "TheChainsmokers.png"
]

let nombrescanciones = [
  "goodAsHell.mp3",
  "giant.mp3",
  "dontCallMeUp.mp3",
  "conCalmaRemix.mp3",
  "allAroundTheWorldLaLaLa.mp3",
  "antisocial.mp3",
  "takiTaki.mp3",
  "happier.mp3",
  "crossMe.mp3",
  "nothingBreaksLikeaHeart.mp3",
  "noBrainer.mp3",
 "sucker.mp3",
  "callYouMine.mp3",
  "howDoYouSleep.mp3",
  "higherLove.mp3",
  "IDontCare.mp3",
  "finduAgain.mp3",
  "beautifulPeople.mp3",
  "southOfTheBorder.mp3",
  "truthHurts.mp3",
  "señorita.mp3",
  "girlsLikeYou.mp3",
  "takeaway.mp3",
  "onlyHuman.mp3",
  "trampoline.mp3",
  "noGuidance.mp3",
  "killsYouSlowly.mp3",
  "someoneYouLoved.mp3",
  "talk.mp3",
  "loseYouToLoveMe.mp3"
]

let musica = []
let imagenes = []

let data
let minBailabilidad = 48
let maxBailabilidad = 90
let velocidades = []
let canciones
let selected

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

let img1


function preload() {
  data = loadJSON("data/spotify.json")
  
  for (let i = 0; i < nombresImagenes.length; i++) {
    let imagenCargada = loadImage("imagenes/" + nombresImagenes[i])
    imagenes.push(imagenCargada)
  }

  soundFormats ('mp3')
  for (let i = 0; i < nombrescanciones.length; i++) {
    let musicacargada = loadSound("audio/" + nombrescanciones[i])
    musica.push(musicacargada)
  }

}


function setup() {
  createCanvas(1435, 600);

  
   /* Define color gradient */
   c1 = color(204, 102, 0);
   c2 = color(0);

  canciones = data.canciones

  //Para el Hover
  selected = floor(random(canciones.length))
 

  for (x = 0; x < canciones.length; x++) {
    // mapeo la bailabilidad a una velocidad
    let velocidad = map(canciones[x].bailabilidad, minBailabilidad, maxBailabilidad, 1, 3) 
    // creo una nueva propiedad "velocidad" a cada objeto de cancion y le guardo la velocidad mapeada
    canciones[x].velocidad = velocidad  
    // también creo una propieda posY para que cada canciones arranque en la posicion 310 (valor arbitrario)
    canciones[x].posY = 310 
  }
  

}


function draw() {
  background(0);

  /* Rectángulo gradient */
  setGradient(800, 0, width-800, height, c2, c1);

  /* Título */
  fill (255)
  textSize (35)
  noStroke()
  text ("¿Cuán bailables son tus",50,55)
  text ("canciones preferidas?", 50, 95)

  // Dónde va la foto
  rect (50, 393, 170 )

  textSize (17)
  text ("Presionar           o           para seleccionar otra canción", 965, 560)
  flechaderecha (1111, 555) 
  flechaizquierda (1060, 555)


  /* RECORRO LA LISTA */
  for (let i = 0; i < canciones.length; i++) {

    /* rectangulo de fondo de circulitos (caminito) */
    fill (180)
    noStroke ()
    rect (i*45 + 50, height - 250, 20, -110, 15)


    /* Hover */
    if (i == selected) {


    musica[i].play(0,1)

      if(canciones[i].artista == "Calvin Harris"){
       image(imagenes[0], 50, 393, 170,170)
      } else if(canciones[i].artista == "Chris Brown"){
        image(imagenes[1], 50, 393, 170,170)
       } if(canciones[i].artista == "Daddy Yankee"){
        image(imagenes[2], 50, 393, 170,170)
       } if(canciones[i].artista == "DJ Khaled"){
        image(imagenes[3], 50, 393, 170,170)
       } if(canciones[i].artista == "DJ Snake"){
        image(imagenes[4], 50, 393, 170,170)
       } if(canciones[i].artista == "Ed Sheeran"){
        image(imagenes[5], 50, 393, 170,170)
       } if(canciones[i].artista == "Jonas Brothers"){
        image(imagenes[6], 50, 393, 170,170)
       } if(canciones[i].artista == "Khalid"){
        image(imagenes[7], 50, 393, 170,170)
       } if(canciones[i].artista == "Kygo"){
        image(imagenes[8], 50, 393, 170,170)
       } if(canciones[i].artista == "Lewis Capaldi"){
        image(imagenes[9], 50, 393, 170,170)
       } if(canciones[i].artista == "Lizzo"){
        image(imagenes[10], 50, 393, 170,170)
       } if(canciones[i].artista == "Mabel"){
        image(imagenes[11], 50, 393, 170,170)
       } if(canciones[i].artista == "Mark Ronson"){
        image(imagenes[12], 50, 393, 170,170)
       } if(canciones[i].artista == "Maroon 5"){
        image(imagenes[13], 50, 393, 170,170)
       } if(canciones[i].artista == "Marshmello"){
        image(imagenes[14], 50, 393, 170,170)
       } if(canciones[i].artista == "R3HAB"){
        image(imagenes[15], 50, 393, 170,170)
       } if(canciones[i].artista == "Sam Smith"){
        image(imagenes[16], 50, 393, 170,170)
       } if(canciones[i].artista == "Selena Gomez"){
        image(imagenes[17], 50, 393, 170,170)
       } if(canciones[i].artista == "SHAED"){
        image(imagenes[18], 50, 393, 170,170)
       } if(canciones[i].artista == "Shawn Mendes"){
        image(imagenes[19], 50, 393, 170,170)
       } if(canciones[i].artista == "The Chainsmokers"){
        image(imagenes[20], 50, 393, 170,170)
       }
       
      
      /* rectangulo seleccionado */
      stroke(255)
      strokeWeight(9)
      fill(255)
      rect (i*45 + 50, height - 250, 20, -110, 15)

      /* Cambia el color del gradient */
      if (canciones[i].genero == "Pop") {
        c1 = color (255, 0, 255) // fucsia
      } else if (canciones[i].genero == "Latin"){
        c1 = color (255, 115, 0) // naranja
      } else if (canciones[i].genero == "Big room"){
        c1 = color (255, 230, 0) // amarillo
      } else if (canciones[i].genero == "Electronic trap"){
        c1 = color (122, 12, 237) // violeta
      } else if (canciones[i].genero == "Edm"){
        c1 = color (23, 201, 116) // verde
      } else if (canciones[i].genero == "R&B") {
        c1 = color (0, 200, 255) // celeste
      }

      /* Textos nombre, minutos, recaudacion */
      /* traigo la info del json */
      fill (255)
      textSize (17)
      noStroke()
      text ("Título: " + canciones[i].titulo, 240, 410 )
      text ("Artista: " + canciones[i].artista, 240, 435)
      text ("Género: " + canciones[i].genero, 240, 460)
      text ("Duración: " + canciones[i].duracion + " seg", 240, 485 )
      text ("Bailabilidad: " + canciones[i].bailabilidad, 240, 510)
      text ("Energía: " + canciones[i].energia, 240, 535)
      text ("BPM: " + canciones[i].bpm, 240, 560)

     
      
    }
    
    
    /* le doy color a las elipses según el género */
    if (canciones[i].genero == "Pop") {
      fill (255, 0, 255) // fucsia
    } else if (canciones[i].genero == "Latin"){
      fill (255, 115, 0) // naranja
    } else if (canciones[i].genero == "Big room"){
      fill (255, 230, 0) // amarillo
    } else if (canciones[i].genero == "Electronic trap"){
      fill (122, 12, 237) // violeta
    } else if (canciones[i].genero == "Edm"){
      fill (23, 201, 116) // verde
    } else if (canciones[i].genero == "R&B") {
      fill (0, 200, 255) // celeste
    }
    

    /* dibujo las elipses y les doy movimiento */
    // cada ellipse se dibujará en posY 310 la primera vez
    ellipse(i * 45 + 60, canciones[i].posY, 20)  
    
    // le sumo la velocidad mapeada anteriormente a su posY (posicion Y)
    canciones[i].posY += canciones[i].velocidad  
    
    // si la posicion pasa estos valores cambio el signo
    if (canciones[i].posY >= height - 260 || canciones[i].posY <= 250) {  
      canciones[i].velocidad *= -1
    }
    

    /* ACÁ TERMINA EL FOR QUE RECORRE LA LISTA */
  }
  

  /* Referencia código de color - elipses */
  referenciaDeColor (50,255,0,255)
  referenciaDeColor (70,255, 115, 0)
  referenciaDeColor (90,255, 230, 0)
  referenciaDeColor (110,122, 12, 237)
  referenciaDeColor (130,23, 201, 116)
  referenciaDeColor (150,0, 200, 255)


  /* Referencias código de color - texto */
  textSize (14)
  fill (255)
  noStroke()
  text ("Pop", width-150, 53)
  text ("Latin", width - 150, 73)
  text ("Big room", width - 150, 93)
  text ("Electronic trap", width - 150, 113)
  text ("Edm", width - 150, 133)
  text ("R&b", width - 150, 153)
}


function keyPressed() {
  if (key == "ArrowRight") {
    selected++
  } else if (key == "ArrowLeft") {
    selected--
  }

  if (selected == canciones.length) {
    selected = 0
  } else if (selected == -1) {
    selected = canciones.length - 1
  }
  console.log(selected)
  console.log(key)
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = x; i <= x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h)
  }
}

function referenciaDeColor (posY,r,g,b){
  fill(r,g,b)
  ellipse(width-170, posY, 15)
}

function flechaderecha (a, b) {
  fill (255)
  rect (a, b, 15, 2)
  triangle(a+15, b-4, a+25, b, a+15, b+6)
}

function flechaizquierda (c, d) {
  rect (c, d, 15, 2)
  triangle(c, d-4, c-10, d, c, d+6)
}

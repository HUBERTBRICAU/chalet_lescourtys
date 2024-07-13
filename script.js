

  const langueFrancais = "Français";
  const langueNeerl = "Nederlands";
// function Neerlandais() {

// }
// function Français() {

// }

let paragraphe= document.getElementById("paragraphe");
let image =document.getElementById("image");
let srcImage = image.getAttribute('src');
let etat = false;

// function modif(){

//   document.getElementById("leVillage").innerHTML = "toto";
// }

function maLangue() {
  if(etat==false){
  etat=true;
  srcImage="images/drapeau-france.png";
  document.getElementById("image").setAttribute("src", srcImage); 
  document.getElementById("image").style.width="50px"; 
  document.getElementById("leVillage").innerHTML = "Het dorp";
  document.getElementById("leChalet").innerHTML = "Het huisje";
  document.getElementById("h1id").innerHTML = "Het Courtys-chalet";
  document.getElementById("remarquables").innerHTML = "Een idee van enkele opmerkelijke plekken in de Ardennen";
  document.getElementById("textNaturecmlic").innerHTML = "Klik om naar Kaarten te gaan";
  document.getElementById("lechalet").innerHTML = "Het huisje";
  document.getElementById("nosforets").innerHTML = "Onze bossen";
  document.getElementById("Bayart").innerHTML = "De 4 zonen Aymon, het Bayart-paard";
  document.getElementById("tunnelCanal").innerHTML = "Saint-Aignan, de kanaaltunnel";
  document.getElementById("dames").innerHTML = "Laifour, de dames van Maas";
  document.getElementById("eglise").innerHTML = "Saint-Aignan, de kerk";
  document.getElementById("placeDucale").innerHTML = "Charleville-Mézières, hertogelijk plein";
  document.getElementById("chateauSedan").innerHTML = "Kasteel Sedan";
  document.getElementById("riviere").innerHTML = "Een rivier";
  document.getElementById("Champignons").innerHTML = "Paddestoelen";
  }
  else{
  etat=false;
  srcImage="images/drapeau-pays-bas.png";
  document.getElementById("image").setAttribute("src", srcImage); 
  document.getElementById("image").style.width="50px"; 
  srcImage="images/esp32.png" ;
  document.getElementById("leVillage").innerHTML = "Le village";
  document.getElementById("leChalet").innerHTML = "Le chalet";
  document.getElementById("h1id").innerHTML = "Le chalet Courtys";
  document.getElementById("nosforets").innerHTML = "Nos forêts";
  document.getElementById("remarquables").innerHTML = "Une idée de quelques sites remarquables des Ardennes";
  document.getElementById("textNaturecmlic").innerHTML = "Cliquer pour aller sur Maps";
  document.getElementById("Bayart").innerHTML = "Les 4 fils Aymon, le cheval Bayart";
  document.getElementById("tunnelCanal").innerHTML = "Saint-Aignan, le tunnel du canal";
  document.getElementById("dames").innerHTML = "Laifour, les dames de Meuse";
  document.getElementById("eglise").innerHTML = "Saint-Aignan, l'église";
  document.getElementById("placeDucale").innerHTML = "Charleville-Mézières, place ducale";
  document.getElementById("chateauSedan").innerHTML = "Le château de Sedan";
  document.getElementById("riviere").innerHTML = "Une riviére";
  document.getElementById("Champignons").innerHTML = "Champignons";
  }
}


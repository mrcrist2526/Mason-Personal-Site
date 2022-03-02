
var i = 0;

window.addEventListener("load", typer);

function typer(){
  const typewriter = document.getElementById("typewriter");
  let text = "Aspiring web developer.";
  if (i < text.length){
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typer, 80);
  }
};

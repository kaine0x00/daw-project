let id = null;
function blogMenu(elementId){
  const element = document.getElementById(elementId);
  const topmenu = document.getElementById('topmenu')
  let pos = -10;
  if (element.style.display === "none"){
    topmenu.style.boxShadow = "none";
    clearInterval(id);
    element.style.display = "flex";
    id = setInterval(frame, 22 );
    function frame(){
      if (pos === 13){
        clearInterval(id)
      } else {
        pos++;
        element.style.top = pos*8 + 'px';
      }
    }
  } else {
    element.style.display = "none";
    topmenu.style.boxShadow = "0.01em 3em 2em var(--bg)";
  }
}

function profile(elementId){
  const element = document.getElementById(elementId);
  const blackout = document.getElementById('blackout');
  let pos = -50;
  if (element.style.display === "none"){
    blackout.style.display = "block";
    element.style.display = "block";
    clearInterval(id);
    id = setInterval(frame, 1 );
    function frame(){
      if (pos === 3){
        clearInterval(id)
      } else {
        pos++;
        element.style.right = pos*5 + 'px';
      }
    }
  } else {
    element.style.display = "none";
    blackout.style.display = "none";
  }
}

function changeColour(id){
  let colour = document.getElementById(id).value;
  let root = document.documentElement;
  root.style.setProperty("--" + id, colour);
}

function resetColour(){
  let style = getComputedStyle(document.body)
  let root = document.documentElement;
  root.style.setProperty("--accent", style.getPropertyValue("--accent") );
  root.style.setProperty("--accent2", style.getPropertyValue("--accent2") );
  root.style.setProperty("--bg", style.getPropertyValue("--bg") );
  root.style.setProperty("--textcolour", style.getPropertyValue("--textcolour") );
}

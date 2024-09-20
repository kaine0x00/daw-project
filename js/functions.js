let id = null;
function blogmenu(elementId){
  const element = document.getElementById(elementId);
  const topmenu = document.getElementById('topmenu')
  let pos = 0;
  if (element.style.display === "none"){
    topmenu.style.boxShadow = "none";
    element.style.display = "flex";
    clearInterval(id);
    id = setInterval(frame, 18 );
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

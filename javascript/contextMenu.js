const noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

const Context = document.getElementById('ContextMenu');
Context.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert("Hola!")
});

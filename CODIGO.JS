function add(){
var usuario1 =document.getElementById('nome1').value
 var usuario2=document.getElementById('nome2').value
localStorage.setItem('pessoa1',usuario1)
localStorage.setItem('pessoa2',usuario2)
window.location="TELA2.HTML"
}
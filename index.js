const resp = ['Com certeza!', 'Com certeza não!', 'Minhas fontes dizem que sim!', 'Minhas fontes dizem que não!', 'Os astros dizem que sim!', 'Os astros dizem que não!', 'O destino prevê que sim!', 'O destino prevê que não!', 'Os ventos dizem que não!', 'Os ventos dizem que sim!'];
const resposta = document.querySelector('#resposta');
function perguntar(){
if(Txt.value == ""){
  window.alert("Digite sua pergunta!");
  return;
}
botao.setAttribute("disabled", true)
const pergunta = "<div>" + Txt.value + "</div>"
const tmn = resp.length;
const rnd = Math.floor(Math.random() * tmn);
resposta.innerHTML = pergunta + resp[rnd];
resposta.style.opacity = 1;
setTimeout(function(){
  resposta.style.opacity = 0;
  botao.removeAttribute("disabled")
}, 3000)
}

const getHours = () => {
  const horasPagina = document.getElementById('horas')
  const dataPagina = document.getElementById('data')
  var dataAtual = new Date();
  var horas = dataAtual.getHours();
  var hora = horas < 10 ? `0${horas}` : horas
  var minutos = dataAtual.getMinutes();
  var minuto = minutos < 10 ? `0${minutos}` : minutos
  horasPagina.innerHTML = hora + ':' + minuto
}

setInterval(() => {
  getHours()
}, 1000)
const getHours = () => {
  const horasPagina = document.getElementById('horas')
  const dataPagina = document.getElementById('data')
  var dataAtual = new Date();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth();
  var ano = dataAtual.getFullYear();
  horasPagina.innerHTML = horas + ':' + minutos
}

setInterval(() => {
  getHours()
}, 1000)
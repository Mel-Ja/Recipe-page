var ahora = new Date();
var hora_actual= ahora.toLocaleDateString();

datetime = document.querySelector('.datetime')
console.log(datetime)
console.log(hora_actual)
console.log(typeof(hora_actual))

datetime.innerHTML = hora_actual
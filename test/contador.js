const color = document.getElementById('fondo_color')
const numeroc = document.getElementById('numero')
const numero = document.getElementById('numeroc')
alert(color.style.height);
let cantidad = 0
let tiempo = setInterval(() => {
    cantidad += 1
    color.style.height = `${cantidad}%`
    numero.textContent = cantidad
    if (cantidad === 100) {
        clearInterval(tiempo)
    }
}, 100);

document.getElementById('stat-count').textContent = "100";
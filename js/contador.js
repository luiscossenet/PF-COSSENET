
function widget(contadores) {
    // Your code here
    for (let key in contadores) {
        console.log(key + ": " + contadores[key]);
        let color = document.getElementById(`fondo_color_${key}`);
        let numero = document.getElementById(`numero_${key}`);
        let valorContador = contadores[key];
        let cantidad = 0;
        let tiempo = setInterval(() => {
            cantidad += 1;
            //console.log(cantidad);
            color.style.height = `${cantidad}%`;
            numero.textContent = "+" + cantidad;
            if (cantidad === valorContador || cantidad > valorContador) {
                clearInterval(tiempo);
            }
            else if (valorContador > 20) {
                if (cantidad + 20 < valorContador) {
                    cantidad = cantidad + 20;
                }
            }

        }, valorContador);
    }
}

fetch('./files/contadores.txt')
    .then(response => response.text())
    .then(data => {
        //const contadores = data.split('\r\n').map(Number);
        const lines = data.split('\r\n');
        const contadores = {};
        lines.forEach(line => {
            const [name, value] = line.split(':');
            contadores[name.trim()] = parseInt(value.trim());
            console.log(contadores[name.trim()]);
            console.log([name, value]);
        });
        widget(contadores);
        console.log(contadores["servicios"]);
        console.log(contadores["estudiantes"]);
        console.log(contadores["years"]);

    })
    .catch(error => {
        console.error('Error reading file:', error);
    });

/*

function widget(contadores) {
    // Your code here
    for (let key in contadores) {
        console.log(key + ": " + contadores[key]);
        let color = document.getElementById(`fondo_color_${key}`);
        let numero = document.getElementById(`numero_${key}`);
        let valorContador = contadores[key];
        let cantidad = 0;
        let tiempo = setInterval(() => {
            cantidad += 1;
            //console.log(cantidad);
            color.style.height = `${cantidad}%`;
            numero.textContent = "+" + cantidad;
            if (cantidad === valorContador || cantidad > valorContador) {
                clearInterval(tiempo);
            }
            else if (valorContador > 20) {
                if (cantidad + 20 < valorContador) {
                    cantidad = cantidad + 20;
                }
            }

        }, valorContador);
    }

}
*/

/*
for (let i = 0; i < contadores.length; i++) {
    alert(contadores.length);
    let color = document.getElementById(`fondo_color${i}`)
    let numero = document.getElementById(`numero${i}`)
    console.log(contadores[i]);
    let valorContador = contadores[i];
    let cantidad = 0
    let tiempo = setInterval(() => {
        cantidad += 1
        color.style.height = `${cantidad}%`
        numero.textContent = cantidad
        if (cantidad === valorContador) {
            clearInterval(tiempo)
        }
    }, valorContador);
}
*/

/*

fetch('files/contadores.txt')
    .then(response => response.text())
    .then(data => {
        //const contadores = data.split('\r\n').map(Number);
        const lines = data.split('\r\n');
        const contadores = {};
        lines.forEach(line => {
            const [name, value] = line.split(':');
            contadores[name.trim()] = parseInt(value.trim());
            console.log(contadores[name.trim()]);
            console.log([name, value]);
        });
        widget(contadores);
        console.log(contadores["servicios"]);
        console.log(contadores["estudiantes"]);
        console.log(contadores["years"]);

    })
    .catch(error => {
        console.error('Error reading file:', error);
    });
*/
const producto = [
    {nombre: "Rio (4,50x2,40x1,20)", precio: 652155},
    {nombre: "Caribe (5x3x1,40)", precio: 705715},
    {nombre: "Hawai (5,50x2,80x1,30)", precio: 756733},
    {nombre: "Tulum (6x3x1,40)", precio: 796237},
    {nombre: "MDP (7x3x1,40)", precio: 996815},
    {nombre: "Acapulco (8,50x3,30x1,50)", precio: 1176915},
];

let carrito = []

let seleccion = prompt ("desea comprar algun modelo? si o no")

while (seleccion != "si" && seleccion != "no") {
    alert ("Por favor ingresa si o no")
    seleccion = prompt ("Ingrese el modelo a comprar si o no")
}

if (seleccion == "si") {
    alert ("a continuacion nuestra lista de productos")
    let todoslosProductos = producto.map ((producto) => producto.nombre + " " + producto.precio + "$");
    alert (todoslosProductos.join (" - "))
} else if (seleccion == "no") {
    alert ("Gracias por contactarnos")
}

while (seleccion != "no") {
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "Rio" || producto == "Caribe" || producto == "Hawai" || producto == "Tulum" || producto == "MDP" || producto == "Acapulco") {
        switch (producto) {
            case "Rio":
                precio = 652155;
                break;
            case "Caribe":
                precio = 705715;
                break;    
            case "Hawai":
                precio = 756733;
                break;
            case "Tulum":
                precio = 796237;
                break;
            case "MDP":
                precio = 996815;
                break;
            case "Acapulco":
                precio = 1176915;
                 break;
            default:
                break;
        }
    let unidades = parseInt (prompt("cuantas unidades quiere comprar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert ("no tenemos ese producto seleccionado")
    }

    seleccion = prompt ("desea seguir comprando?")

    while (seleccion == "no") {
        alert ("gracias por su compra")
        carrito.forEach((carritoFinal)=> {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es: ${total}`)
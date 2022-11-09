const producto = [
    {nombre: "Rio (4,50x2,40x1,20)", precio: 652.100},
    {nombre: "Caribe (5x3x1,40)", precio: 705.715},
    {nombre: "Hawai (5,50x2,80x1,30)", precio: 652.000},
    {nombre: "Tulum (6x3x1,40)", precio: 796.200},
    {nombre: "MDP (7x3x1,40)", precio: 652.000},
    {nombre: "Acapulco (8,50x3,30x1,50)", precio: 652.000},
];

let carrito = []

let seleccion = prompt ("Ingrese el modelo a comprar si o no")

while (seleccion != "si" && seleccion != "no") {
    alert ("Por favor ingresa si o no")
    seleccion = prompt ("Ingrese el modelo a comprar si o no")
}

if (seleccion == "si") {
    alert ("a continuacion nuestra lista de productos")
    let todoslosProductos = producto.map ((producto) => producto.nombre + " " + producto.precio + "$");
    alert (todoslosProductos.join (" - "))
}
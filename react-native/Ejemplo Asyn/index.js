function sinPromesa() { 
    return Promise.resolve(1)
        .then(x => x + 1)
        .then(x => x + 1)
        .then(console.log)
}//Funciones sencillasa, sin promesas se resuelven así
sinPromesa()

async function conPromesa() { 
    const resultado = await Promise.resolve(1);
    console.log(resultado + 1 + 1);
}//Funciones complejas con métodos complejps y promesas se resuelven así
conPromesa();
const usuario = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: "25 años"
    direccion = {
        calle: "palacios",
        ciudad: "Bogota",
        pais: "Colombia"
    }
}

presentarse(){
    return `Hola, soy ${this.nombre}, ${this.apellido}, tengo ${this.edad}, y vivo en ${this.ciudad}, ${this.pais}.;’
}

const { direccion: {ciudad, pais} } = ususario;
 console.log(`ciudad extraida: ${ciudad}’);
console.log(`Pais extraida: ${pais}’);
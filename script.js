const usuario = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: "25 años",
    direccion: {
        calle: "palacios",
        ciudad: "Bogota",
        pais: "Colombia"
    },
    presentarse() {
        return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad}, y vivo en ${this.direccion.ciudad}, ${this.direccion.pais}.`;
    }
};

const { ciudad, pais } = usuario.direccion;
console.log(`Ciudad extraida: ${ciudad}`);
console.log(`Pais extraida: ${pais}`);
console.log(usuario.presentarse());
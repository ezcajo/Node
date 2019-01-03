let profesor = {
	nombre: 'Silvia',
	apellido: 'Quinteros',
	caminar:function(){
		return(` ${this.nombre} ${this.apellido}`);
	}
}
console.log(profesor.caminar());

//Destructuracion del Objto

let {nombre: primerNombre, apellido} =profesor;

console.log(primerNombre, apellido);
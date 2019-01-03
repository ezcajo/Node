//callbacks
/*setTimeout(function(){
console.log('hola Marcelo Peralta')
}, 3000);*/


let getUsuarioById = (id, callbacks)=>{

	let usuario={
		nombre:'Marcelo',
		id //en ecma 6 es redundante colocar el atributo si es igual al parametro que recibe por parametro

	}
	callbacks(usuario);
}
getUsuarioById( 10, (usuario) => {
	console.log('usuario de base de datos', usuario);
});
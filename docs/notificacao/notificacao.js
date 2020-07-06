function test_notificacao(){
	if (Notification.permission === "granted"){
		setTimeout(mostrarNotificacao, 5000);
	}
	else if (Notification.permission !== "denied"){
		Notification.requestPermission().then(permission => {
			if (permission === "granted"){
				setTimeout(mostrarNotificacao, 500);	
			}
		});
	}
}

var dia = [{
	"vacina":"polio",
	"mes":"7",
	"dia":"1"
},
{
	"vacina":"gripe",
	"mes":"7",
	"dia":"2"
},
{
	"vacina":"dengue",
	"mes":"7",
	"dia":"3"
},
{
	"vacina":"Apresentação",
	"mes":"7",
	"dia":"7"
}]

function mostrarNotificacao(){
	for (var i = 0; i < dia.length; i++){
		var obj = dia[i];
		var hj = new Date();
		if (hj.getMonth() + 1 == obj.mes && hj.getDate() == obj.dia){
			var notificacao = new Notification(`Campanha nova da vacina ${obj.vacina}`, {
				body: `Vai comecar uma campanha da vacina hoje `,
			});
		}
	}
}



//testar se usuario foi logado 
var usuariosJSON = localStorage.getItem('db_usuarios');
if (usuariosJSON){
    test_notificacao();
}

$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		getPlante(id);
		getPlantes();
	}
	$("#bModifier").on ("click", envoyer);
});



function getPlante(id) {
	$.get("http://localhost:8080/TP-Fleurs/rs/plantes/" + id, modifPlante);
}



function getPlantes() {
	$.get("http://localhost:8080/TP-Fleurs/rs/plantes/", afficherPlantes);
}


	
function afficherPlantes(plantes) {
	
	var data = "";
	$("#nbPlantes").html(plantes.length);
	
	plantes.forEach(function(f) {
		var tr = "<tr>";
		tr += "<td>" + f.id + "</td>";
		tr += "<td>" + f.nom + "</td>";
		tr += "<td>" + f.tarif + "</td>";
		tr += "<td>" + f.quantite + "</td>";

		tr += "<td class='centre'><button onclick='modifPlante(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppPlante(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function modifPlante(plante) {

        $("#nomPlante").val(plante.nom);
        $("#tarifPlante").val(plante.tarif);
        $("#quantitePlante").val(plante.quantite);
        $("#informations").val(plante.informations);
        $("#image").val(plante.image);
    	$("#idPlante").val(plante.id);
    	
}



function envoyer() {

	var data = {
		nom: $("#nomPlante").val(),
		tarif: $("#tarifPlante").val(),
		quantite : $("#quantitePlante").val(),
		informations: $("#informations").val(),
		image: $("#image").val(),
	}
	$.ajax({
		type: 'put',
		url: 'http://localhost:8080/TP-Fleurs/rs/plantes/' + $("#idPlante").val(),
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "gestion_plantes.html";
		}
	})
	.fail(function() {
		$("#errorPlante").css("display", "block");
		$("#errorPlante").html("Une erreur est survenue lors de la modification");
	})
}
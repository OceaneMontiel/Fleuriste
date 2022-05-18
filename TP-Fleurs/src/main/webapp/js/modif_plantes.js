$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		getPlantes(id);
	}
	
	$("#bModifier").on ("click", envoyer);

});



function getPlantes(id) {
	$.get("http://localhost:8080/TP-Fleurs/rs/plantes/" + id, afficherPlantes);
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




/*
function getStyles() {
		$("#errorFilm").css("display", "none");

	$.get("http://localhost:8080/15-tp-filmotheque/rs/styles", function(styles){

		var data = "";
		styles.forEach(function(s){
			data += "<option value="+s.id +">" + s.libelle + "</option>";
		});
		
		$("#style").html(data);
		
	});
}
*/



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
		url: 'http://localhost:8080/TP-Fleurs/rs/plantes/' + $("#id").val(),
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "gestion_plantes.html";
		}
	})
	.fail(function() {
		$("#errorFilm").css("display", "block");
		$("#errorFilm").html("Une erreur est survenue lors de la modification");
	})
}

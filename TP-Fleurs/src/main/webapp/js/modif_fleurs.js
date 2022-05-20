$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		console.log("coucou");
		getSaison();
		getFleur(id);
		getFleurs();
	}
	$("#bModifier").on ("click", envoyer);
});



function getSaison() {
	$("#errorSaison").css("display", "none");

	$.get("http://localhost:8080/TP-Fleurs/rs/saisons/", function(saisons){

		var data = "";
		saisons.forEach(function(s){
			data += "<option value="+s.id +">" + s.nom + "</option>";
		});
		$("#saisonFleur").html(data);
	});
}



function getFleur(id) {
	$.get("http://localhost:8080/TP-Fleurs/rs/fleurs/" + id, modifFleur);
}



function getFleurs() {
	$.get("http://localhost:8080/TP-Fleurs/rs/fleurs/", afficherFleurs);
}


	
function afficherFleurs(fleurs) {
	
	var data = "";
	$("#nbFleurs").html(fleurs.length);
	
	fleurs.forEach(function(f) {
		var tr = "<tr>";
		tr += "<td>" + f.id + "</td>";
		tr += "<td>" + f.nom + "</td>";
		tr += "<td>" + f.tarif + "</td>";
		tr += "<td>" + f.quantite + "</td>";
		tr += "<td>" + f.saison.nom + "</td>";

		tr += "<td class='centre'><button onclick='modifFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function modifFleur(fleur) {

        $("#nomFleur").val(fleur.nom);
        $("#tarifFleur").val(fleur.tarif);
        $("#quantiteFleur").val(fleur.quantite);
        $("#informations").val(fleur.informations);
        $("#image").val(fleur.image);
        $("#saisonFleur").val(fleur.saison.id);
    	$("#idFleur").val(fleur.id);
    	
}



function envoyer() {

	var data = {
		nom: $("#nomFleur").val(),
		tarif: $("#tarifFleur").val(),
		quantite : $("#quantiteFleur").val(),
		informations: $("#informations").val(),
		image: $("#image").val(),
		saison:{
			id: $("#saisonFleur").val(),
		}
	}
	$.ajax({
		type: 'put',
		url: 'http://localhost:8080/TP-Fleurs/rs/fleurs/' + $("#idFleur").val(),
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "gestion_fleurs.html";
		}
	})
	.fail(function() {
		$("#errorFleur").css("display", "block");
		$("#errorFleur").html("Une erreur est survenue lors de la modification");
	})
}
$(function() {
	getSaison();
	getFleurs();
	$("#bAjoutFleur").on("click", ajouterFleur);
});



function getFleurs() {
	$.get("http://localhost:8080/TP-Fleurs/rs/fleurs", afficherFleurs);
}

function ajouterFleur() {

	var data = {
		nom: $("#nomFleur").val(),
		tarif: $("#tarifFleur").val(),
		quantite: $("#quantiteFleur").val(),
		informations: $("#informations").val(),
		image: $("#image").val(),
		couleur: $("#couleur").val(), 
		saison:{
			id: $("#saisonFleur").val(),
		}
	}
	$.ajax({
		type: 'post',
		url: 'http://localhost:8080/TP-Fleurs/rs/fleurs',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			$("#nomFleur").val("");
			$("#tarifFleur").val("");
			$("#quantiteFleur").val("");
			$("#informations").val("");
			$("#image").val("");
			$("#couleur").val();
			$("#saisonFleur").val();
			getFleurs();
		}
	})
	.fail(function() {
		$("#errorStyle").css("display", "block");
		$("#errorStyle").html("Une erreur est survenue lors de l'ajout");
	})

}


function afficherFleurs(fleurs) {
	var data = "";
	$("#nbFleurs").html(fleurs.length);
	fleurs.forEach(function(f) {
		var tr = "<tr>";
		tr += "<td class='centre'>" + f.id + "</td>";
		tr += "<td class='centre'>" + f.nom + "</td>";
		tr += "<td class='centre'>" + f.tarif + "</td>";
		tr += "<td class='centre'>" + f.quantite + "</td>";
		tr += "<td class='centre'>" + f.saison.nom + "</td>";

		tr += "<td class='centre'><button onclick='modifFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}

function afficheFleur(id){
	window.location = "gestion_fleurs.html?id=" + id;
}

function modifFleur(id){
	window.location = "modif.html?id=" + id;
}




function suppFleur(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/TP-Fleurs/rs/fleurs/' + id,
		success : function(){
			getFleurs();
		}
	})
	.fail(function(){
		$("#errorFilm").css("display", "block");
		$("#errorFilm").html("Une erreur est survenue lors de la suppression");
	})
}



function getSaison() {
        $("#errorFleur").css("display", "none");

    $.get("http://localhost:8080/TP-Fleurs/rs/saisons", function(saisons){

        var data = "";
        saisons.forEach(function(s){
            data += "<option value="+s.id +">" + s.nom + "</option>";
        });

        $("#saisonFleur").html(data);

    });
}

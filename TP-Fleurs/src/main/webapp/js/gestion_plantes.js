$(function() {
	getPlantes();
	$("#bAjoutPlante").on("click", ajouterPlante);
});



function getPlantes() {
	$.get("http://localhost:8080/TP-Fleurs/rs/plantes", afficherPlantes);
}



function ajouterPlante() {

	var data = {
		nom: $("#nomPlante").val(),
		tarif: $("#tarifPlante").val(),
		quantite: $("#quantitePlante").val(),
		informations: $("#informations").val(),
		image: $("#image").val(), 
	}
	$.ajax({
		type: 'post',
		url: 'http://localhost:8080/TP-Fleurs/rs/plantes',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			$("#nomPlante").val("");
			$("#tarifPlante").val("");
			$("#quantitePlante").val("");
			$("#informations").val("");
			$("#image").val("");
			getPlantes();
		}
	})
	.fail(function() {
		$("#errorPlante").css("display", "block");
		$("#errorPlante").html("Une erreur est survenue lors de l'ajout");
	})
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



function affichePlante(id){
	window.location = "gestion_plantes.html?id=" + id;
}



function modifPlante(id){
	window.location = "modif_plantes.html?id=" + id;
}



function suppPlante(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/TP-Fleurs/rs/plantes/' + id,
		success : function(){
			getPlantes();
		}
	})
	.fail(function(){
		$("#errorPlante").css("display", "block");
		$("#errorPlante").html("Une erreur est survenue lors de la suppression");
	})
}
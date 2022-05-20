$(function() {
	getSaisons();
	$("#bAjoutSaison").on("click", ajouterSaison);
});



function getSaisons() {
	$("#errorSaison").css("display", "none");
	$.get("http://localhost:8080/TP-Fleurs/rs/saisons", afficherSaisons);
}



function ajouterSaison() {

	var data = {
		nom: $("#nomSaison").val(),
	}
	$.ajax({
		type: 'post',
		url: 'http://localhost:8080/TP-Fleurs/rs/saisons',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			$("#nomSaison").val("");
			getSaisons();
		}
	})
	.fail(function() {
		$("#errorStyle").css("display", "block");
		$("#errorStyle").html("Une erreur est survenue lors de l'ajout");
	})

}



function afficherSaisons(saisons) {
	var data = "";
	saisons.forEach(function(s) {
		var tr = "<tr>";
		tr += "<td>" + s.id + "</td>";
		tr += "<td><input type='text' id='nomSaison" + s.id + "' value=" + s.nom + " /></td>";
		tr += "<td class='centre'><button onclick='modifSaison(" + s.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppSaison(" + s.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function suppSaison(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/TP-Fleurs/rs/saisons/' + id,
		success : function(){
			getSaisons();
		}
	})
	.fail(function(){
		$("#errorSaison").css("display", "block");
		$("#errorSaison").html("Une erreur est survenue lors de la suppression");
	})
}



function modifSaison(id){
	
	var data = {
		nom: $("#nomSaison" + id).val(),
	}
	$.ajax({
		type : 'put',
		url : 'http://localhost:8080/TP-Fleurs/rs/saisons/'+id,
		data : JSON.stringify(data),
		contentType : "application/json;charset=utf-8",
		success : function(){
			getSaisons();
		}
	})
	.fail(function(){
		getSaisons();
		$("#errorSaison").css("display", "block");
		$("#errorSaison").html("Une erreur est survenue lors de la modification");
	})
	
}
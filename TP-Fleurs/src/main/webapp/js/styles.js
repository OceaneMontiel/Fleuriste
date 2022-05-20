$(function() {
	getStyles();
	$("#bAjoutStyle").on("click", ajouterStyle);
});



function getStyles() {
	$("#errorStyle").css("display", "none");
	$.get("http://localhost:8080/TP-Fleurs/rs/styles", afficherStyles);
}



function ajouterStyle() {

	var data = {
		nom: $("#nomStyle").val(),
	}
	$.ajax({
		type: 'post',
		url: 'http://localhost:8080/TP-Fleurs/rs/styles',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			$("#nomStyle").val("");
			getStyles();
		}
	})
	.fail(function() {
		$("#errorStyle").css("display", "block");
		$("#errorStyle").html("Une erreur est survenue lors de l'ajout");
	})

}



function afficherStyles(styles) {
	var data = "";
	styles.forEach(function(s) {
		var tr = "<tr>";
		tr += "<td>" + s.id + "</td>";
		tr += "<td><input type='text' id='nomStyle" + s.id + "' value=" + s.nom + " /></td>";
		tr += "<td class='centre'><button onclick='modifStyle(" + s.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppStyle(" + s.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function suppStyle(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/TP-Fleurs/rs/styles/' + id,
		success : function(){
			getStyles();
		}
	})
	.fail(function(){
		$("#errorStyle").css("display", "block");
		$("#errorStyle").html("Une erreur est survenue lors de la suppression");
	})
}



function modifStyle(id){
	
	var data = {
		nom: $("#nomStyle" + id).val(),
	}
	$.ajax({
		type : 'put',
		url : 'http://localhost:8080/TP-Fleurs/rs/styles/'+id,
		data : JSON.stringify(data),
		contentType : "application/json;charset=utf-8",
		success : function(){
			getStyles();
		}
	})
	.fail(function(){
		getStyles();
		$("#errorStyle").css("display", "block");
		$("#errorStyle").html("Une erreur est survenue lors de la modification");
	})
	
}
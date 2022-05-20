$(function() {
	getSaison();
	getStyle();
	getBouquets();
	$("#bAjoutBouquet").on("click", ajouterBouquet);
});



function getBouquets() {
	$.get("http://localhost:8080/TP-Fleurs/rs/bouquets", afficherBouquets);
}



function ajouterBouquet() {

	var data = {
		nom: $("#nomBouquet").val(),
		tarif: $("#tarifBouquet").val(),
		quantite: $("#quantiteBouquet").val(),
		informations: $("#infosBouquet").val(),
		image: $("#imageBouquet").val(),
		couleur: $("#couleurBouquet").val(),
		saison: {
			id: $("#saisonBouquet").val(),
		},
		style: {
			id: $("#styleBouquet").val(),
		}
	}
	$.ajax({
		type: 'post',
		url: 'http://localhost:8080/TP-Fleurs/rs/bouquets',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			$("#nomBouquet").val("");
			$("#tarifBouquet").val("");
			$("#quantiteBouquet").val("");
			$("#infosBouquet").val("");
			$("#imageBouquet").val("");
			$("#couleurBouquet").val("");
			$("#saisonBouquet").val();
			$("#styleBouquet").val();
			getBouquets();
		}
	})
	.fail(function() {
		$("#errorBouquet").css("display", "block");
		$("#errorBouquet").html("Une erreur est survenue lors de l'ajout");
	})
}



function afficherBouquets(bouquets) {
	
	var data = "";
	$("#nbBouquets").html(bouquets.length);
	
	bouquets.forEach(function(f) {
		var tr = "<tr>";
		tr += "<td>" + f.id + "</td>";
		tr += "<td>" + f.nom + "</td>";
		tr += "<td>" + f.tarif + "</td>";
		tr += "<td>" + f.quantite + "</td>";
		tr += "<td>" + f.saison.nom + "</td>";
		tr += "<td>" + f.style.nom + "</td>";

		tr += "<td class='centre'><button onclick='modifBouquet(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppBouquet(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function afficheBouquet(id){
	window.location = "gestion_bouquets.html?id=" + id;
}



function modifBouquet(id){
	console.log("bouquet");
	window.location = "modif_bouquets.html?id=" + id;
}



function suppBouquet(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/TP-Fleurs/rs/bouquets/' + id,
		success : function(){
			getBouquets();
		}
	})
	.fail(function(){
		$("#errorBouquet").css("display", "block");
		$("#errorBouquet").html("Une erreur est survenue lors de la suppression");
	})
}



function getSaison() {
        $("#errorBouquet").css("display", "none");

    $.get("http://localhost:8080/TP-Fleurs/rs/saisons", function(saisons){

        var data = "";
        saisons.forEach(function(s){
            data += "<option value="+s.id +">" + s.nom + "</option>";
        });

        $("#saisonBouquet").html(data);

    });
}



function getStyle() {
        $("#errorBouquet").css("display", "none");

    $.get("http://localhost:8080/TP-Fleurs/rs/styles", function(styles){

        var data = "";
        styles.forEach(function(s){
            data += "<option value="+s.id +">" + s.nom + "</option>";
        });

        $("#styleBouquet").html(data);

    });
}
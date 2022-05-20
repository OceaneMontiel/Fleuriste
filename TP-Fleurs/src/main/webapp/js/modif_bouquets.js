$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		console.log("coucou");
		getSaison();
		getStyle();
		getBouquet(id);
		getBouquets();
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
		$("#saisonBouquet").html(data);
	});
}



function getStyle() {
	$("#errorStyle").css("display", "none");

	$.get("http://localhost:8080/TP-Fleurs/rs/styles/", function(styles){

		var data = "";
		styles.forEach(function(s){
			data += "<option value="+s.id +">" + s.nom + "</option>";
		});
		$("#styleBouquet").html(data);
	});
}



function getBouquet(id) {
	$.get("http://localhost:8080/TP-Fleurs/rs/bouquets/" + id, modifBouquet);
}



function getBouquets() {
	$.get("http://localhost:8080/TP-Fleurs/rs/bouquets/", afficherBouquets);
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

		tr += "<td class='centre'><button onclick='modifFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppFleur(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}



function modifBouquet(bouquet) {

        $("#nomBouquet").val(bouquet.nom);
        $("#tarifBouquet").val(bouquet.tarif);
        $("#quantiteBouquet").val(bouquet.quantite);
        $("#informations").val(bouquet.informations);
        $("#image").val(bouquet.image);
        $("#couleurBouquet").val(bouquet.couleur);
        $("#saisonFleur").val(bouquet.saison.id);
        $("#styleBouquet").val(bouquet.style.id);
    	$("#idBouquet").val(bouquet.id);
   
}



function envoyer() {

	var data = {
		nom: $("#nomBouquet").val(),
		tarif: $("#tarifBouquet").val(),
		quantite : $("#quantiteBouquet").val(),
		informations: $("#informations").val(),
		image: $("#image").val(),
		couleur: $("#couleurBouquet").val(),
		saison:{
			id: $("#saisonBouquet").val(),
		},
		style:{
			id: $("#styleBouquet").val(),
		}
	}
	$.ajax({
		type: 'put',
		url: 'http://localhost:8080/TP-Fleurs/rs/bouquets/' + $("#idBouquet").val(),
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "gestion_bouquets.html";
		}
	})
	.fail(function() {
		$("#errorBouquet").css("display", "block");
		$("#errorBouquet").html("Une erreur est survenue lors de la modification");
	})
}
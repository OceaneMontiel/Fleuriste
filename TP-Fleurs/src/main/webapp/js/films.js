$(function() {
	getFilms();
});



function getFilms() {
	$.get("http://localhost:8080/15-tp-filmotheque/rs/films", afficherFilms);
}


function afficherFilms(films) {
	var data = "";
	$("#nbFilms").html(films.length);
	films.forEach(function(f) {
		var tr = "<tr>";
		tr += "<td><button onclick='afficheFilm(" + f.id + ")' type='button' class='btn btn-link'>"+f.titre+"</button></td>";
		tr += "<td>" + f.annee + "</td>";
		tr += "<td>" + f.style.libelle + "</td>";
		tr += "<td>" + f.real.prenom + " " + f.real.nom + "</td>";
		tr += "<td>" + f.duree + "</td>";
		tr += "<td>" + (f.vu?"Oui":"Non") + "</td>";

		tr += "<td class='centre'><button onclick='modifFilm(" + f.id + ")' type='button' class='glyphicon glyphicon-edit vert'></button></td>";
		tr += "<td class='centre'><button onclick='suppFilm(" + f.id + ")' type='button' class='glyphicon glyphicon-remove rouge'></button></td>";

		tr += "</tr>";

		data += tr;
	})
	$("#tbodyliste").html(data);
}

function afficheFilm(id){
	window.location = "film.html?id=" + id;
}

function modifFilm(id){
	window.location = "modif.html?id=" + id;
}




function suppFilm(id){
	$.ajax({
		type : 'delete',
		url : 'http://localhost:8080/15-tp-filmotheque/rs/films/' + id,
		success : function(){
			getFilms();
		}
	})
	.fail(function(){
		$("#errorFilm").css("display", "block");
		$("#errorFilm").html("Une erreur est survenue lors de la suppression");
	})
}

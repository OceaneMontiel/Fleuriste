$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		getFilm(id)
	}
});



function getFilm(id) {
	$.get("http://localhost:8080/15-tp-filmotheque/rs/films/" + id, afficherFilm);
}

function afficherFilm(film) {
	console.log(film);
	$("#titre").val(film.titre);
	$("#annee").val(film.annee);
	$("#style").val(film.style.libelle);
	$("#realn").val(film.real.nom);
	$("#realp").val(film.real.prenom);
	$("#duree").val(film.duree);
	$("#vu").val(film.vu?'Oui':'Non');
	$("#synopsis").val(film.synopsis);

	var nbActeurs = film.acteurs.length;
	var data = "";	
	for (var i = 0 ; i < nbActeurs ; i++){
		var acteur = film.acteurs[i];
		
		var a = "<div class='form-group'>";
		a += "<label class='col-xs-2 control-label''>Acteur "+ (i +1)  +" :</label>"
		a += "<div class='col-xs-5'><input readonly value='"+acteur.prenom+"' class='form-control' /></div>"
		a += "<div class='col-xs-5'><input readonly value='"+acteur.nom+"' class='form-control' /></div>"
		a += "</div>";
		
		
		data += a;
	}
	$("#acteurs").append(data);
}
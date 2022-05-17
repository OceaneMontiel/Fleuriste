$(function() {
	let searchParams = new URLSearchParams(window.location.search);
	let id = searchParams.get('id')
	if (id == null){
		window.location = "index.html";
	}
	else{
		getFilm(id);
		getStyles();
	}
	
	$("#bEnvoyer").on ("click", envoyer);

});



function getFilm(id) {
	$("#errorFilm").css("display", "none");

	$.get("http://localhost:8080/15-tp-filmotheque/rs/films/" + id, afficherFilm);
}

function afficherFilm(film) {
	console.log(film);
	$("#id").val(film.id);
	$("#titre").val(film.titre);
	$("#annee").val(film.annee);
	$("#style").val(film.style.id);
	$("#realn").val(film.real.nom);
	$("#realp").val(film.real.prenom);
	$("#duree").val(film.duree);
	$("#vu").val("" + film.vu);
	$("#synopsis").val(film.synopsis);

	var nbActeurs = film.acteurs.length;
	var data = "";	
	for (var i = 0 ; i < nbActeurs ; i++){
		var acteur = film.acteurs[i];
		$("#prenom" + i).val(acteur.prenom);
		$("#nom" + i).val(acteur.nom);
	}
}



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




function envoyer() {

	var data = {
		titre: $("#titre").val(),
		annee: $("#annee").val(),
		style :{
			id: $("#style").val()
			},
		real:{
			prenom : $("#realp").val(),
			nom : $("#realn").val(),
		} ,
		duree: $("#duree").val(),
		vu: $("#vu").val(),
		synopsis: $("#synopsis").val(),
		acteurs:[{
			prenom : $("#prenom0").val(),
			nom : $("#nom0").val(),
		},
		{
			prenom : $("#prenom1").val(),
			nom : $("#nom1").val(),
		},
		{
			prenom : $("#prenom2").val(),
			nom : $("#nom2").val(),
		},
		{
			prenom : $("#prenom3").val(),
			nom : $("#nom3").val(),
		},
		{
			prenom : $("#prenom4").val(),
			nom : $("#nom4").val(),
		}]

	}
	

	$.ajax({
		type: 'put',
		url: 'http://localhost:8080/15-tp-filmotheque/rs/films/' + $("#id").val(),
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "films.html";
		}
	})
	.fail(function() {
		$("#errorFilm").css("display", "block");
		$("#errorFilm").html("Une erreur est survenue lors de la modification");
	})
}

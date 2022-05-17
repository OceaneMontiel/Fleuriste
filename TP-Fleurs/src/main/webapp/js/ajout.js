
$(function() {
//	getFilms();
	getStyles();
	$("#bEnvoyer").on ("click", envoyer);
});



function envoyer() {

	var data = {
		titre: $("#titre").val(),
		annee: $("#annee").val(),
		style :{
			id: $("#style").val()
			},
		real:{
			prenom : $("#realprenom").val(),
			nom : $("#realnom").val(),
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
		type: 'post',
		url: 'http://localhost:8080/15-tp-filmotheque/rs/films',
		data: JSON.stringify(data),
		contentType: "application/json;charset=utf-8",
		success: function() {
			window.location = "films.html";
		}
	})
	.fail(function() {
		$("#errorFilm").css("display", "block");
		$("#errorFilm").html("Une erreur est survenue lors de l'ajout");
	})
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


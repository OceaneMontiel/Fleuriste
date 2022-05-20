$(function(){
	getFleurs();
});



function getFleurs(){
	$("errorFleur").css("display", "none");
	$.get("http://localhost:8080/TP-Fleurs/rs/fleurs", afficherFleurs);
}



function afficherFleurs(Fleurs) {
    var data = "";
    Fleurs.forEach(function(b) {
        var content = "";
        // Card
        content += "<div class='card' >";
        content += " <div class='block' style='justify-content : center;'>";
        content += "<h5 class='card-title'><a class='text-danger' href=''>" + b.nom + "</a></h5>";
        content += " <img class='card-img-top w-100 ' src=" + b.image + " >";
        content += "<div class='card-body'>";
        content += " <p class='card-text tarif-card'>"+ b.tarif + " €" + "</p>";
        content += "<button type='button' class='btn btn-danger' id ='plus' data-toggle='modal' data-target='#MyModal"+ b.id +"'>Plus d'infos</button>";
        content += "<div class='modal fade' id='MyModal"+ b.id +"'>";
        content += "<div class='modal-dialog'>";
        content += "<div class='modal-content'>";
        content += "<h2 class='modal-title text-danger'><b>"+ b.nom +"</b></h2>";
        content += "</div>";
        content += "<div class='modal-body'>";
        content += "<div class = 'cartediv'> ";
        content += "<div class = 'jumbotron backdiv'> ";
        content += "<h4 class='text-danger'><i>"+ b.informations +"</i></h4>";
        content += "<img class='card-img-top w-100 ' src=" + b.image + " >";
        content += "<h5 class='cartedivtitle text-danger'><b>COULEUR DOMINANTE : </b>"+ b.couleur + " </h5>";
        content += "<h5 class='cartedivtitle text-danger'><b>SAISON : </b>"+ b.saison.nom + " </h5>";
        content += "<h5 class='cartedivtitle text-danger'><b>PRIX : </b>"+ b.tarif + " € </h5>";
        content += "<h5 class='cartedivtitle text-danger'><b>EN STOCK : </b>"+ b.quantite + " produit(s) restant(s) </h5>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        content += "<div class='modal-footer'>";
        content += "<button type='button' class='btn btn-danger' data-dismiss='modal'>Fermer</button>";
        content += "</div>";
        content += "</div>";
        content += "</div>";
        content += " </div>";
        content += " </div>";
        content += " </div>";

        data += content;
    })
    $("#content").html(data);
} 
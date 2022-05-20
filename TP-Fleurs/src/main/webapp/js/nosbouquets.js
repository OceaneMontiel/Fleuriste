$(function(){
	getBouquets();
});



function getBouquets(){
	$("errorBouquet").css("display", "none");
	$.get("http://localhost:8080/TP-Fleurs/rs/bouquets", afficherBouquets);
}



function afficherBouquets(Bouquets) {
    var data = "";
    Bouquets.forEach(function(b) {
        var content = "";
        // Carte
        content += "<div class='card' >";
        content += " <div class='block' style='justify-content : center;'>";
        content += "<h5 class='card-title'><a class='text-warning' href=''>" + b.nom + "</a></h5>";
        content += " <img class='card-img-top w-100 ' src=" + b.image + " >";
        content += "<div class='card-body'>";
        content += " <p class='card-text tarif-card'>"+ b.tarif + " €" + "</p>";
        content += "<button type='button' class='btn btn-warning' id ='plus' data-toggle='modal' data-target='#MyModal"+ b.id +"'>Plus d'infos</button>";
        // Popup
        content += "<div class='modal fade' id='MyModal"+ b.id +"'>";
        content += "<div class='modal-dialog'>";
        // Titre popup
        content += "<div class='modal-content'>";
        content += "<h2 class='modal-title text-warning'><b>"+ b.nom +"</b></h2>";
        content += "</div>";
        // Body popup
        content += "<div class='modal-body'>";
        content += "<div class = 'cartediv'> ";
        //Contenu popup
        content += "<div class = 'jumbotron backdiv'> ";
        // infos
        content += "<h4 class='text-warning'><i>"+ b.informations +"</i></h4>";
        //img
        content += "<img class='card-img-top w-100 ' src=" + b.image + " >";
        // détails
        content += "<h5 class='cartedivtitle text-warning'><b>COULEUR DOMINANTE : </b>"+ b.couleur + " </h5>";
        content += "<h5 class='cartedivtitle text-warning'><b>SAISON : </b>"+ b.saison.nom + " </h5>";
        content += "<h5 class='cartedivtitle text-warning'><b>STYLE : </b>"+ b.style.nom + " </h5>";
        content += "<h5 class='cartedivtitle text-warning'><b>PRIX : </b>"+ b.tarif + " € </h5>";
        content += "<h5 class='cartedivtitle text-warning'><b>EN STOCK : </b>"+ b.quantite + " produit(s) restant(s) </h5>";
        content += "</div>";
        
        content += "</div>";
        content += "</div>";
        // Fermeture
        content += "<div class='modal-footer'>";
        content += "<button type='button' class='btn btn-warning' data-dismiss='modal'>Fermer</button>";
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
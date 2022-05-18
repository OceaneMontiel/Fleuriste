package com.formation.jpa.bean;

import java.net.URL;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fleur {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String nom;
	private float tarif;
	private int quantite;
	private String informations;
	private URL image;
	private String couleur;
	
	@ManyToOne
	private Saison saison;
	
	
	public Fleur() {
		
	}
	
	public Fleur(int id, String nom, float tarif, int quantite, String informations, URL image, String couleur,
			Saison saison) {
		this.id = id;
		this.nom = nom;
		this.tarif = tarif;
		this.quantite = quantite;
		this.informations = informations;
		this.image = image;
		this.couleur = couleur;
		this.saison = saison;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public float getTarif() {
		return tarif;
	}



	public void setTarif(float tarif) {
		this.tarif = tarif;
	}



	public int getQuantite() {
		return quantite;
	}



	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}



	public String getInformations() {
		return informations;
	}



	public void setInformations(String informations) {
		this.informations = informations;
	}



	public URL getImage() {
		return image;
	}



	public void setImage(URL image) {
		this.image = image;
	}



	public String getCouleur() {
		return couleur;
	}



	public void setCouleur(String couleur) {
		this.couleur = couleur;
	}



	public Saison getSaison() {
		return saison;
	}



	public void setSaison(Saison saison) {
		this.saison = saison;
	}






	@Override
	public String toString() {
		return "Fleur [id=" + id + ", nom=" + nom + ", tarif=" + tarif + ", quantite=" + quantite + ", informations="
				+ informations + ", image=" + image + ", couleur=" + couleur + ", saison=" + saison + "]";
	}
	
	
}

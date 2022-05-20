package com.formation.jpa.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plante {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String nom;
	private float tarif;
	private int quantite;
	private String informations;
	private String image;
	
	
	public Plante() {
	}


	public Plante(int id, String nom, float tarif, int quantite, String informations, String image) {
		this.id = id;
		this.nom = nom;
		this.tarif = tarif;
		this.quantite = quantite;
		this.informations = informations;
		this.image = image;
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


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	@Override
	public String toString() {
		return "Plante [id=" + id + ", nom=" + nom + ", tarif=" + tarif + ", quantite=" + quantite + ", informations="
				+ informations + ", image=" + image + "]";
	}
	
	

	

	
}

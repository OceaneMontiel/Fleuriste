package com.formation.jpa.bll;

import java.util.List;

import com.formation.jpa.bean.Fleur;
import com.formation.jpa.dal.DaoFactory;
import com.formation.jpa.dal.FleurDAO;

public class FleurManager {

	FleurDAO dao;
	
	public FleurManager(){
		dao = DaoFactory.getFleurDAO();
	}
	
	public List<Fleur> listeFleurs(){
		return dao.findAll();
	}
	
	public Fleur trouverFleur(int id){
		return dao.findById(id);
	}
	
	
	public void ajoutFleur(Fleur f) throws Exception{
		if (f == null || f.getNom() == null || f.getNom().isBlank())
			throw new Exception("Fleur pas correct");
		dao.add(f);
	}
	
	public void modifierFleur(Fleur f) throws Exception{
//		Film film = dao.findOne(f.getId());
//		film.setActeurs(f.getActeurs());
//		film.setAnnee(f.getAnnee());
//		film.setDuree(f.getDuree());
//		film.setReal(f.getReal());
//		film.setStyle(f.getStyle());
//		film.setSynopsis(f.getSynopsis());
//		film.setTitre(f.getTitre());
//		film.setVu(f.isVu());
//		dao.save(film);
		if (f == null || f.getNom() == null || f.getNom().isBlank())
			throw new Exception("Fleur pas correct");
		dao.update(f);
	}
	
	public void supprimerFleur(Fleur f) throws Exception{
		dao.delete(f);
	}
	
	public void supprimerFleur(int id) throws Exception{
		dao.delete(trouverFleur(id));
	}

	public List<Fleur> trier(String par) {
		List<Fleur> liste = null;
		
		switch (par) {
		default : liste = dao.findAll();

		}
		
		return liste;
	}
	
	
	
}

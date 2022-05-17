package com.formation.jpa.bll;

import java.util.List;

import com.formation.jpa.bean.Bouquet;
import com.formation.jpa.dal.BouquetDAO;
import com.formation.jpa.dal.DaoFactory;

public class BouquetManager {

	BouquetDAO dao;
	
	public BouquetManager(){
		dao = DaoFactory.getBouquetDAO();
	}
	
	public List<Bouquet> listeBouquets(){
		return dao.findAll();
	}
	
	public Bouquet trouverBouquet(int id){
		return dao.findById(id);
	}
	
	
	public void ajoutBouquet(Bouquet f) throws Exception{
		if (f == null || f.getNom() == null || f.getNom().isBlank())
			throw new Exception("Bouquet pas correct");
		dao.add(f);
	}
	
	public void modifierBouquet(Bouquet f) throws Exception{
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
			throw new Exception("Bouquet pas correct");
		dao.update(f);
	}
	
	public void supprimerBouquet(Bouquet f) throws Exception{
		dao.delete(f);
	}
	
	public void supprimerBouquet(int id) throws Exception{
		dao.delete(trouverBouquet(id));
	}

	public List<Bouquet> trier(String par) {
		List<Bouquet> liste = null;
		
		switch (par) {
		default : liste = dao.findAll();

		}
		
		return liste;
	}
	
	
	
}

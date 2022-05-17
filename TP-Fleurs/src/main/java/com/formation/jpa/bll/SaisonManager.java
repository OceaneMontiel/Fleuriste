package com.formation.jpa.bll;

import java.util.List;

import com.formation.jpa.bean.Saison;
import com.formation.jpa.dal.DaoFactory;
import com.formation.jpa.dal.SaisonDAO;
import com.formation.jpa.exception.BeanException;


public class SaisonManager {

	private SaisonDAO dao;
	
	public SaisonManager(){
		dao = DaoFactory.getSaisonDAO();
	}
	
	public List<Saison> listeSaison(){
		return dao.findAll();
	}
	
	
	public Saison trouverSaison(int id){
		return dao.findById(id);
	}

	public void ajoutSaison(Saison s) throws Exception{
		
		if (s.getNom() != null && !s.getNom().trim().equals(""))
			dao.add(s);
		else
			throw new BeanException("La saison doit être nommée");
	}
	
	public void modifierSaison(Saison s) throws Exception{
		if (s.getNom() != null && !s.getNom().trim().equals(""))
			dao.update(s);
		else
			throw new BeanException("La saison doit etre nommée");
	}
	
	public void supprimerSaison(Saison s) throws Exception{
		dao.delete(s);
	}
	
	public void supprimerSaison(int id) throws Exception{
		Saison s = dao.findById(id);
		dao.delete(s);
	}
	
	public List<Saison> trier(String type){
		List<Saison> liste = null;
		switch (type){
		default : liste = dao.findAll();
		}
		return liste;
	}
	
}

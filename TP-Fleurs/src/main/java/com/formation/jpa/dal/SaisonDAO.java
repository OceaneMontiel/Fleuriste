package com.formation.jpa.dal;

import java.util.List;

import com.formation.jpa.bean.Saison;



public interface SaisonDAO{

	
	public void add(Saison f) throws Exception;
	public void delete(Saison f) throws Exception;
	public  void update(Saison f) throws Exception;
	public Saison findById(int id);
	public  List<Saison> findAll();

}

package com.formation.jpa.dal;

import java.util.List;

import com.formation.jpa.bean.Bouquet;



public interface BouquetDAO{

	
	public void add(Bouquet f) throws Exception;
	public void delete(Bouquet f) throws Exception;
	public  void update(Bouquet f) throws Exception;
	public Bouquet findById(int id);
	public  List<Bouquet> findAll();

}

package com.formation.jpa.dal;

import java.util.List;

import com.formation.jpa.bean.Plante;



public interface PlanteDAO{

	
	public void add(Plante f) throws Exception;
	public void delete(Plante f) throws Exception;
	public  void update(Plante f) throws Exception;
	public Plante findById(int id);
	public  List<Plante> findAll();

}

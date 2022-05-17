package com.formation.jpa.dal;

import java.util.List;

import com.formation.jpa.bean.Fleur;



public interface FleurDAO{

	
	public void add(Fleur f) throws Exception;
	public void delete(Fleur f) throws Exception;
	public  void update(Fleur f) throws Exception;
	public Fleur findById(int id);
	public  List<Fleur> findAll();

}

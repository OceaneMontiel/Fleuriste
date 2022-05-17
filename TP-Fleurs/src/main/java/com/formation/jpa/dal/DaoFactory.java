package com.formation.jpa.dal;

public class DaoFactory {

	public static StyleDAO getStyleDAO(){
		return new StyleDAOImpl();
	}
	public static PlanteDAO getPlanteDAO(){
		return new PlanteDAOImpl();
	}
	public static FleurDAO getFleurDAO(){
		return new FleurDAOImpl();
	}
	public static BouquetDAO getBouquetDAO(){
		return new BouquetDAOImpl();
	}
	public static SaisonDAO getSaisonDAO(){
		return new SaisonDAOImpl();
	}
}

package com.formation.jpa.dal;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.formation.jpa.bean.Plante;



public class PlanteDAOImpl implements PlanteDAO{

	@Override
	public void add(Plante f) throws Exception{
		EntityManager em = DAOUtil.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		try {
			em.persist(f);
			et.commit();
		} catch (Exception e) {
			et.rollback();
			throw e;
		}
		finally {
			em.close();
		}
	}

	@Override
	public void delete(Plante f) throws Exception{
		EntityManager em = DAOUtil.getEntityManager();
		EntityTransaction et = em.getTransaction();
		f = em.find(Plante.class, f.getId());
		et.begin();
		try {
			em.remove(f);
			et.commit();
		} catch (Exception e) {
			et.rollback();
			throw e;
		}
		finally {
			em.close();
		}
	}

	@Override
	public  void update(Plante f) throws Exception{
		EntityManager em = DAOUtil.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		try {
			em.merge(f);
			et.commit();
		} catch (Exception e) {
			et.rollback();
			throw e;
		}
		finally {
			em.close();
		}
	}
	


	@Override
	public Plante findById(int id){
		EntityManager em = DAOUtil.getEntityManager();
		Plante f = em.find(Plante.class, id);
		em.close();
		return f;
	}
	
	@Override
	public  List<Plante> findAll(){
		String req = "select Object(f) from Plante f";
		EntityManager em = DAOUtil.getEntityManager();
		List<Plante> liste = em
				.createQuery(req, Plante.class)
				.getResultList();
		em.close();
		
		return liste;
	}


}

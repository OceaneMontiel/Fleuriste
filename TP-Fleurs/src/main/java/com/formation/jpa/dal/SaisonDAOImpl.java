package com.formation.jpa.dal;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.formation.jpa.bean.Saison;



public class SaisonDAOImpl implements SaisonDAO{

	@Override
	public void add(Saison f) throws Exception{
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
	public void delete(Saison f) throws Exception{
		EntityManager em = DAOUtil.getEntityManager();
		EntityTransaction et = em.getTransaction();
		f = em.find(Saison.class, f.getId());
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
	public  void update(Saison f) throws Exception{
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
	public Saison findById(int id){
		EntityManager em = DAOUtil.getEntityManager();
		Saison f = em.find(Saison.class, id);
		em.close();
		return f;
	}
	
	@Override
	public  List<Saison> findAll(){
		String req = "select Object(f) from Saison f";
		EntityManager em = DAOUtil.getEntityManager();
		List<Saison> liste = em
				.createQuery(req, Saison.class)
				.getResultList();
		em.close();
		
		return liste;
	}


}

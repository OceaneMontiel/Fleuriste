package com.formation.jpa.dal;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.formation.jpa.bean.Bouquet;



public class BouquetDAOImpl implements BouquetDAO{

	@Override
	public void add(Bouquet f) throws Exception{
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
	public void delete(Bouquet f) throws Exception{
		EntityManager em = DAOUtil.getEntityManager();
		EntityTransaction et = em.getTransaction();
		f = em.find(Bouquet.class, f.getId());
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
	public  void update(Bouquet f) throws Exception{
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
	public Bouquet findById(int id){
		EntityManager em = DAOUtil.getEntityManager();
		Bouquet f = em.find(Bouquet.class, id);
		em.close();
		return f;
	}
	
	@Override
	public  List<Bouquet> findAll(){
		String req = "select Object(f) from Bouquet f";
		EntityManager em = DAOUtil.getEntityManager();
		List<Bouquet> liste = em
				.createQuery(req, Bouquet.class)
				.getResultList();
		em.close();
		
		return liste;
	}


}

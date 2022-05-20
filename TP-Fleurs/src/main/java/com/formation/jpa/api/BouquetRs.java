package com.formation.jpa.api;

import java.util.List;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.formation.jpa.bean.Bouquet;
import com.formation.jpa.bll.BouquetManager;


@Path("/bouquets")
@Singleton
public class BouquetRs {
	
	
	private BouquetManager bouquetManager;
	
	
	public BouquetRs() {
		bouquetManager = new BouquetManager();
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Bouquet> getBouquet(){
		return bouquetManager.listeBouquets();
	}
	

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Bouquet getBouquet(@PathParam("id") int id) {
		try {
			Bouquet f = bouquetManager.trouverBouquet(id);
			if (f != null)
				return f;
			else
				throw new WebApplicationException(Response.Status.CONFLICT);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void postBouquet(Bouquet f) {
		try {
			System.out.println("Le bouquet "+ f );
			bouquetManager.ajoutBouquet(f);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	

	@DELETE
	@Path("/{id}")
	public void removeBouquet(@PathParam("id") int id) {
		try {
			bouquetManager.supprimerBouquet(id);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public void putBouquet(Bouquet f, @PathParam("id") int id) {
		try {
			f.setId(id);
			bouquetManager.modifierBouquet(f);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	
}
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

import com.formation.jpa.bean.Plante;
import com.formation.jpa.bll.PlanteManager;

@Path("/plantes")
@Singleton
public class PlanteRs {
	
	
	private PlanteManager planteManager;
	
	
	public PlanteRs() {
		planteManager = new PlanteManager();
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Plante> getPlantes(){
		return planteManager.listePlante();
	}
	

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Plante getPlante(@PathParam("id") int id) {
		try {
			Plante f = planteManager.trouverPlante(id);
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
	public void postPlante(Plante f) {
		try {
			planteManager.ajoutPlante(f);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	

	@DELETE
	@Path("/{id}")
	public void removePlante(@PathParam("id") int id) {
		try {
			planteManager.supprimerPlante(id);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public void putPlante(Plante f, @PathParam("id") int id) {
		try {
			f.setId(id);
			planteManager.modifierPlante(f);
		} catch (Exception e) {
			throw new WebApplicationException(Response.Status.CONFLICT);
		}
	}
	
}
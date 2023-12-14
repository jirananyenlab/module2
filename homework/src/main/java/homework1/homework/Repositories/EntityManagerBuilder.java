package homework1.homework.Repositories;

import homework1.homework.entities.Environmet;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;


public class EntityManagerBuilder {
    private final static EntityManagerFactory emf =
            Persistence.createEntityManagerFactory(Environmet.PU_Name);

    public static EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
}

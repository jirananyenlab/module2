package homework1.homework.Repositories;

import homework1.homework.entities.Office;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;


import java.util.List;



public class OfficceRepository {
    private EntityManager entityManager;


    private EntityManager getEntityManager() {
        if (entityManager == null || !entityManager.isOpen()) {
            entityManager = EntityManagerBuilder.getEntityManager();
        }
        return entityManager;
    }

    public List<Office> findAll() {
        return getEntityManager().createNamedQuery("OFFICE.FIND_ALL").getResultList();
    }

    public Office find(String officeCode) {
        return getEntityManager().find(Office.class, officeCode);
    }

    public boolean insert(Office office) {
        try {
            EntityManager entityManager = getEntityManager();
            entityManager.getTransaction().begin();
            entityManager.persist(office);
            entityManager.getTransaction().commit();
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean delete(String officeCode) {
        EntityManager entityManager = getEntityManager();
        Office office = find(officeCode);
        try {
            if (office != null) {
                entityManager.getTransaction().begin();
                entityManager.remove(office);
                entityManager.getTransaction().commit();

            }
            return true;
        } catch (Exception e){
            return false;
        }

    }


    public boolean delete(Office office) {
        if (office != null) {
            EntityManager entityManager = getEntityManager();
            if (entityManager.contains(office)) {
                entityManager.getTransaction().begin();
                entityManager.remove(office);
                entityManager.getTransaction().commit();
                return true;
            } else {
                return delete(office.getOfficeCode());
            }
        }
        return false;
    }


    public boolean update(Office newOffice) {
        if (newOffice != null) {
            EntityManager entityManager = getEntityManager();
            Office office = find(newOffice.getOfficeCode());
            if (office != null) {
                entityManager.getTransaction().begin();
                office.setCity(newOffice.getCity());
                office.setAddressLine1(newOffice.getAddressLine1());
                office.setAddressLine2(newOffice.getAddressLine2());
                office.setState(newOffice.getState());
                office.setCountry(newOffice.getCountry());
                office.setPhone(newOffice.getPhone());
                office.setTerritory(newOffice.getTerritory());
                office.setPostalCode(newOffice.getPostalCode());
                entityManager.getTransaction().commit();
                return true;
            }
        }
        return false;
    }


    public void close() {
        if (entityManager != null && entityManager.isOpen()) {
            entityManager.close();

        }
    }

    public List<Office> findByCityOrCountry(String cityOrCountry) {
        cityOrCountry = cityOrCountry.toLowerCase() + '%';
        Query query = getEntityManager().createNamedQuery("Office.FIND_BY_CITY_OR_COUNTRY");
        query.setParameter("city", cityOrCountry);
        query.setParameter("country", cityOrCountry);
        return query.getResultList();
    }
}


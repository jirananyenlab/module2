package homework1.homework.Servlet;

import homework1.homework.Repositories.OfficceRepository;
import homework1.homework.entities.Office;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.util.Map;

@WebServlet(name = "UpdateServlet", value = "/update_office")
public class UpdateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        OfficceRepository repository = new OfficceRepository();
        // Map<String, String[]> parameterMap = request.getParameterMap();
        // String selectUpdate = parameterMap.get("office")[0];
        String selectUpdate = request.getParameter("office");
        request.setAttribute("selectUpdate" , repository.find(selectUpdate));
        getServletContext().getRequestDispatcher("/office_list.jsp").forward(request,response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        OfficceRepository repository = new OfficceRepository();
        String officeCode = request.getParameter("officeCode");
        String city = request.getParameter("city");
        String phone = request.getParameter("phone");
        String addressLine1 = request.getParameter("addressLine1");
        String addressLine2 = request.getParameter("addressLine2");
        String state = request.getParameter("state");
        String country = request.getParameter("country");
        String postalCode = request.getParameter("postalCode");
        String territory = request.getParameter("territory");

        Office newOffice = new Office();
        newOffice.setOfficeCode(officeCode);
        newOffice.setCity(city);
        newOffice.setPhone(phone);
        newOffice.setAddressLine1(addressLine1);
        newOffice.setAddressLine2(addressLine2);
        newOffice.setState(state);
        newOffice.setCountry(country);
        newOffice.setPostalCode(postalCode);
        newOffice.setTerritory(territory);
        repository.update(newOffice);
        response.sendRedirect("office_list");
    }
}


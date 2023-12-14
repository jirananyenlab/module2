package homework1.homework.Servlet;

import homework1.homework.Repositories.OfficceRepository;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;


import java.io.IOException;

@WebServlet(name = "OfficeListServlet", value = "/office_list")
public class OfficeListServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        OfficceRepository repository = new OfficceRepository();
        HttpSession session = request.getSession();
        session.setAttribute("offices" , repository.findAll());
        String officeCode = request.getParameter("officeCode");
        if ( officeCode != null) {
            session.setAttribute("selectedOffice" , repository.find(officeCode));
        }
        request.getRequestDispatcher("/office_list.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
 

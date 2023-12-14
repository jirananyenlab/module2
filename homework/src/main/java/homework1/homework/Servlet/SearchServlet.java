package homework1.homework.Servlet;

import homework1.homework.Repositories.OfficceRepository;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "SearchServlet", value = "/searchCC")
public class SearchServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // HttpSession session = request.getSession();
    OfficceRepository repository = new OfficceRepository();
    String officeCityorCountry=  request.getParameter("searchCC");
    if ( officeCityorCountry != null) {
        request.setAttribute("cityOrCountry" , repository.findByCityOrCountry(officeCityorCountry));
        }
    if (officeCityorCountry.isEmpty()) {
            request.setAttribute("error" , "input something ");
    }

        request.getRequestDispatcher("/office_list.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}






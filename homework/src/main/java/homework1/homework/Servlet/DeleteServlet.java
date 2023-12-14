package homework1.homework.Servlet;

import homework1.homework.Repositories.OfficceRepository;
import homework1.homework.entities.Office;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "DeleteServlet", value = "/delete-office")
public class DeleteServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String officeCode = request.getParameter("officeCode");
        OfficceRepository repository = new OfficceRepository();
        if ( repository.delete(officeCode) ) {
            request.setAttribute("offices" , repository.findAll());
             request.setAttribute("complete" , "delete success");

             getServletContext().getRequestDispatcher("/OfficeList.jsp").forward(request,response);
        } else {

            request.setAttribute("uncompleted" , "delete not success");
            getServletContext().getRequestDispatcher("/OfficeList.jsp").forward(request,response);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
 

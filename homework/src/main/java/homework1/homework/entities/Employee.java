package homework1.homework.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name = "employees")
@NamedQueries({
        @NamedQuery(name = "E.FIND_ALL" ,query = "select e from Employee e"),
        @NamedQuery(name = "E.FIND_BY_NAME" , query = "select e from Employee e where e.firstName like:first_name or e.lastName like :last_name")
})
public class Employee {
    @Id
    private int employeeNumber;
    private String lastName;
    private String firstName;
    private String extension;
    private String email;
    private String officeCode;
    private String reportsTo;
    private String jobTitle;
    @ManyToOne
    @JoinColumn(name="officeCode" ,insertable = false ,updatable = false )
    private Office office;
}

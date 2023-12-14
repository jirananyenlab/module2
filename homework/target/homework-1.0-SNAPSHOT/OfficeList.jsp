<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div id="containerId" >
    <div class="container">
        <div class="row bg-primary">
            <h2>Classic Model Offices ::</h2>
        </div>
        <div class="row">
            <c:forEach items="${offices}" var="office">
                <div class="col-2 border border-secondary p-2 m-2  ${office.officeCode == selectedOffice.officeCode ? 'bg-warning' : ''}">
                    <div>
                        <a href="office_list?officeCode=${office.officeCode}">${office.city}</a>, ${office.country}
                    </div>
                    <div> ${office.phone}</div>
                </div>
            </c:forEach>
        </div>
        <br>
        <div class="row bg-light">
            <b>Employees ::</b>
        </div>

        <div class="row">
            <c:forEach items="${selectedOffice.employeeList}" var="employee">
                <div class="col-2 pl-2 m-2 border border-secondary rounded-pill">
                    <div> ${employee.firstName} ${employee.lastName} - ${employee.jobTitle}
                    </div>
                </div>
            </c:forEach>
        </div>
    </div>

    <div class="grid-container" id="myBtn">

        <div class="grid-item">
            <h3>insert</h3>
            <form action="insert_office" method="post">
                <div class="Item">
                    <label class="form-label">Office Code</label>
                    <input type="text" name="officeCode" required  ${errorDuplicate!=null ?" onblur='check()'" :""}>

                    <p id="duplicate" style="display: none " >${errorDuplicate}</p>
                </div>
                <div class="Item">
                    <label class="form-label"> City</label>
                    <input type="text" name="city" required >
                </div>
                <div class="Item">
                    <label class="form-label"> Phone</label>
                    <input type="text" name="phone" required>

                </div>
                <div class="Item">
                    <label class="form-label">AddressLine 1</label>
                    <input type="text" name="addressLine1" required>
                </div>
                <div class="Item">
                    <label class="form-label">AddressLine 2</label>
                    <input type="text" name="addressLine2" >
                </div>
                <div class="Item">
                    <label class="form-label">State </label>
                    <input type="text" name="state" >
                </div>
                <div class="Item">
                    <label class="form-label"> Country</label>
                    <input type="text" name="country" required>
                </div>
                <div class="Item">
                    <label class="form-label"> Postcode</label>
                    <input type="text" name="postalCode" required>
                </div>
                <div class="Item">
                    <label class="form-label"> Territory</label>
                    <input type="text" name="territory" required>
                </div>

                <input type="submit" value="Insert" class="submit1">
            </form>

        </div>

        <div class="grid-item">
            <h3>update</h3>


            <div>
                <form action="update_office" method="get">
                    <select name="office" id="office">
                        <option> - Select a officeCode - </option>
                        <c:forEach items="${offices}" var="offices" >
                            <option value="${offices.officeCode}">${offices.officeCode} ${offices.city}</option>
                        </c:forEach>
                    </select>
                    <input type="submit" value="OK" class="submit1">
                </form>
            </div>

            <form action="update_office" method="post">
                <div class="Item">
                    <label class="form-label"> City</label>
                    <input type="text" name="city" required value="${selectUpdate.city}" ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                    <input type="hidden" name="officeCode" value="${selectUpdate.officeCode}">
                </div>
                <div class="Item">
                    <label class="form-label"> Phone</label>
                    <input type="text" name="phone" required value="${selectUpdate.phone}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>

                </div>
                <div class="Item">
                    <label class="form-label">AddressLine 1</label>
                    <input type="text" name="addressLine1"  required value="${selectUpdate.addressLine1}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>
                <div class="Item">
                    <label class="form-label">AddressLine 2</label>
                    <input type="text" name="addressLine2" value="${selectUpdate.addressLine2}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>
                <div class="Item">
                    <label class="form-label">State </label>
                    <input type="text" name="state" value="${selectUpdate.state}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>
                <div class="Item">
                    <label class="form-label"> Country</label>
                    <input type="text" name="country" required value="${selectUpdate.country}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>
                <div class="Item">
                    <label class="form-label"> Postcode</label>
                    <input type="text" name="postalCode" required value="${selectUpdate.postalCode}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>
                <div class="Item">
                    <label class="form-label"> Territory</label>
                    <input type="text" name="territory" required value="${selectUpdate.territory}"  ${selectUpdate.officeCode == null ? "disabled"  : ""}>
                </div>

                <input type="submit" value="update" class="submit1">
            </form>
        </div>

        <div class="grid-item">
            <h3>Find and Delete</h3>
            <form action="searchCC" method="get">
                <input type="search" name="searchCC" placeholder="first char for search ">
                <input type="submit" value="search" class="search">
            </form>

            <div class="row">
            <p>Click for delete</p>

                <c:if test="${uncompleted != null}">
                    <p style="color: red">${uncompleted}</p>

                </c:if>


            <c:if test="${complete != null}">
                <p style="color: green">${complete}</p>

            </c:if>

            <c:if test="${error == null}">
                <c:forEach items="${cityOrCountry}" var="cityOrCountry" varStatus="item">
                    <div class="office" >
                        <div class="selectDelete" name="office" id="item${item.index}"
                             onclick="clickDiv(${cityOrCountry.officeCode} ,${item.index} )" >

                            <div> ${cityOrCountry.city}, ${cityOrCountry.country} </div>

                            <div> ${cityOrCountry.phone}</div>

                        </div>
                    </div>

                </c:forEach>
            </c:if>
            </div>
        </div>
    </div>
</div>



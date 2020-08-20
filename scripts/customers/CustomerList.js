import { getCustomers, useCustomers } from "./CustomersProvider.js"
import { getEmployees, useEmployees } from "../employees/EmployeeDataProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "../EmployeeCustomerProvider.js"
import {customerHTML} from "./CustomerHTML.js"

const contentTarget = document.querySelector(".customerContainer")

export const customerList = () => {
    getCustomers()
        .then(()=> {
            const customersArray = useCustomers()
            render(customersArray)
        })
}

const render = (customerArray) => {
    getEmployees()
        .then(getEmployeeCustomers)
        .then(() => {
            const employees = useEmployees()
            const employeeRelationship = useEmployeeCustomers()

            const allCustomersTurnedIntoHTML = customerArray.map (
                (customer) => {
                    const relationship = employeeRelationship.filter(er => er.customerId === customer.id)
                    const findEmployeesForCustomer = relationship.map( foundEmployee => {
                        return employees.find(employee => employee.id === foundEmployee.employeeId )
                    })

                    return customerHTML (customer, findEmployeesForCustomer)
                }
            ).join("")
        contentTarget.innerHTML = allCustomersTurnedIntoHTML
        })
}
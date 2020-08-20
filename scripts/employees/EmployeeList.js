import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"
import { employeeHTML } from "./EmployeeHTML.js"
import { useComputers, getComputers } from "../computers/ComputerDataProvider.js"
import { useDepartments, getDepartments } from "../departments/DepartmentsProvider.js"
import { useLocations, getLocations } from "../locations/LocationsProvider.js"
import { useCustomers, getCustomers } from "../customers/CustomersProvider.js"
import { useEmployeeCustomers, getEmployeeCustomers } from "../EmployeeCustomerProvider.js"

const contentTarget = document.querySelector(".employeeContainer")

export const employeeList = () => {
    getEmployees()
        .then(() => {
            const employeesArray = useEmployees()
            render(employeesArray)
        })
}

const render = (employeeArray) => {
    getComputers()
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            const departments = useDepartments()
            const computers = useComputers()
            const locations = useLocations()
            const customers = useCustomers()
            const customerRelationship = useEmployeeCustomers()

            const allEmployeesTurnedIntoStrings = employeeArray.map(
                (employee) => {
                    const foundComputer = computers.find(
                        (computer) => {
                            return computer.id === employee.computerId
                        })
                    const foundDepartment = departments.find(
                        (department) => {
                            return department.id === employee.departmentId
                        })
                    const foundLocation = locations.find(
                        (location) => {
                            return location.id === employee.locationId
                        })
                    const relationships = customerRelationship.filter(ec => ec.employeeId === employee.id)
                    const findCustomers = relationships.map(ce => {
                        return customers.find(customer => customer.id === ce.customerId)
                    })


                    return employeeHTML(employee, foundComputer, foundDepartment, foundLocation, findCustomers)

                }).join("")

            contentTarget.innerHTML = allEmployeesTurnedIntoStrings
        }

        )


}



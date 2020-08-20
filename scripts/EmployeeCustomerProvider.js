let employeeCustomers = []

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}

export const getEmployeeCustomers = () => {
    return fetch ("http://localhost:8088/employeeCustomers")
        .then(response => response.json())
        .then(parsedEmployeeCustomers => {
            employeeCustomers = parsedEmployeeCustomers
        })
    }
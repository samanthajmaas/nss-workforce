export const employeeHTML = (employeeObj, computerObj, departmentObj, locationObj, customers) => {
    return `
    <div class="employee">
        <header class="employee__name">
            <h1>${employeeObj.firstName} ${employeeObj.lastName}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${computerObj.year} ${computerObj.model}
        </section>
        <section class="employee__department">
            Works in the ${departmentObj.name} department
        </section>
        <section class="employee__location">
            Works at the ${locationObj.name} office
        </section>
        <section class="employee__customers">
            Has worked for the following customers.
            <ul>
                ${
                    customers.map(customer => `<li>${customer.name}</li>`).join("")
                }
            </ul>
        </section>
    </div>
    `
}
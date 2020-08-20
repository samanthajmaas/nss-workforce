export const customerHTML = (customerObj, employeeArray) => {
    return `
    <div class="customer">
        <header class="customer__name">
            <h1>${customerObj.name}</h1>
        </header>
        
            Employees that have worked for:
            <ul>
                ${
                    employeeArray.map(employee => `<li>${employee.firstName} ${employee.lastName}</li>`).join("")
                }
            </ul>
        </section>
    </div>
    `
}
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  //   Notes- create employee objects is an array (employeesArray) that has employee info (firstName, lastName, salary)
  //   Notes- use prompts to ask for information, need to push information into array
  let employeesArray = [];
  const employeeData = function () {
    let currentEmployee = {};
    currentEmployee.firstName = prompt("First Name");
    currentEmployee.lastName = prompt("Last Name");
    currentEmployee.salary = prompt("Salary");
    employeesArray.push(currentEmployee);
  }
  const getYesOrNo = function () {
    let response;
    do {
      response = prompt("Do you want to add another employee? Please enter Yes or No:").toLowerCase()
    } while (response !== 'yes' && response !== 'no');
    return response;
  };
  const repeat = function () {
    let response = getYesOrNo();
    while (response === 'yes') {
      employeeData();
      response = getYesOrNo();
    }
  };
  employeeData();
  repeat();
  console.log(employeesArray);
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  employeesArray.forEach(employee => {
    totalSalary += parseInt(employee.salary);
  });
  const averageSalary = totalSalary / employeesArray.length
  console.log(`Average salary:${averageSalary}`);
  totalSalary = 0;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length)
  console.log(`Today's employee of the day is ${employeesArray[index].firstName} ${employeesArray[index].lastName}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
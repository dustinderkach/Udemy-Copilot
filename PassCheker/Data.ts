export interface Employee {
    name: string;
    age: number;
    salary: number;

}

const employees: Employee[] = [
    { name: "Alice", age: 25, salary: 50000 },
    { name: "Bob", age: 30, salary: 60000 },
    { name: "Charlie", age: 35, salary: 70000 },
    { name: "David", age: 40, salary: 80000 },
    { name: "Eve", age: 45, salary: 90000 },
    { name: "Frank", age: 50, salary: 100000 },
    { name: "Grace", age: 55, salary: 110000 },
    { name: "Heidi", age: 60, salary: 120000 },
    { name: "Ivan", age: 65, salary: 130000 },
    { name: "Judy", age: 70, salary: 140000 }
];



/**
 * Finds an employee by their name.
 * @param name - The name of the employee to find.
 * @returns The found employee, or undefined if no employee with the given name is found.
 */
function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(employee => employee.name === name) as Employee;
}

function filterEmployeesBySalaryandAge(salary: number, age: number): Employee[] {
    return employees.filter(employee => employee.salary >= salary && employee.age >= age)
}

function getAllEmployeesNames(): string[] {
    return employees.map(employee => employee.name);
}

function getMaxSalary(): number {
    return employees.reduce(
        (max, employee) => Math.max(max, employee.salary), 0);
}

function getAverageSalary(): number {
    return employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;
}   
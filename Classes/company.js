class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].includes("") ||
            [name, salary, position, department].includes(undefined) ||
            [name, salary, position, department].includes(null)) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest = {
            name: "",
            salary: 0
        };

        for (const depKey in this.departments) {
            let averageSalary = 0;
            let currDepartment = this.departments[depKey];

            for (const empKey in currDepartment) {
               averageSalary += currDepartment[empKey].salary;
            }
            averageSalary = averageSalary / currDepartment.length;
            if (currentBest.salary < averageSalary) {
                currentBest = {
                    name: depKey,
                    salary: averageSalary
                }
            }
        }

        this.departments[currentBest.name].sort((a, b) => {
           return b.salary - a.salary || a.name.localeCompare(b.name)
        });

        let bestDepartmentString = "";
        bestDepartmentString += `Best Department is: ${currentBest.name}\n`;
        bestDepartmentString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        for (const key of this.departments[currentBest.name]) {
            bestDepartmentString += `${key.name} ${key.salary} ${key.position}\n`
        }
        return bestDepartmentString.substr(0, (bestDepartmentString.length - 1));
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());


export const getDepartment =()=> [
  { id: "1", title: "Development" },
  { id: "2", title: "Engineering" },
  { id: "3", title: "Marketing" },
  { id: "4", title: "HR" },
];

const KEY= {
  employee: "employees",
  employeeId: "employeeId"
}

export const insertEmployee =(data)=>{
  let employees = getEmployee();
  data["id"] = new Date().getTime().toString();
  employees.push(data)
  localStorage.setItem(KEY.employee, JSON.stringify(employees))
}

export const updateEmployee = (data) => {
  let employees = getEmployee();
  let recordIndex = employees.findIndex(x=> x.id === data.id);
  employees[recordIndex]= {...data}
  localStorage.setItem(KEY.employee, JSON.stringify(employees));
};

export const deleteEmployee = (id) => {
  let employees = getEmployee();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(KEY.employee, JSON.stringify(employees));
};

export const getEmployee =()=>{
 if(localStorage.getItem(KEY.employee)== null)
    localStorage.setItem(KEY.employee, JSON.stringify([]))
  let epmloyeeDepartment = JSON.parse(localStorage.getItem(KEY.employee));
  let departments = getDepartment();
  return epmloyeeDepartment.map(dept =>{
    return ({...dept, department: departments[dept.departmentId - 1].title})
  })
}


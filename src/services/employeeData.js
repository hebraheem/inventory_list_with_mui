

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
// export const generateEmployeeId = () => {
//   if (localStorage.getItem(KEY.employee) == null)
//     localStorage.setItem(KEY.employee, "0");
//   let id = parseInt(localStorage.getItem(KEY.employeeId))
//   localStorage.setItem(KEY.employeeId, (++id).toString())
//   return id
// };

export const getEmployee =()=>{
 if(localStorage.getItem(KEY.employee)== null)
    localStorage.setItem(KEY.employee, JSON.stringify([]))
  return JSON.parse(localStorage.getItem(KEY.employee));
}
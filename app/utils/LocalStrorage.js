const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the monthly report",
        date: "2025-03-15",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare budget analysis",
        date: "2025-03-16",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Attend client meeting",
        date: "2025-03-17",
        category: "Client Work",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 4",
        description: "Prepare for team meeting",
        date: "2025-03-18",
        category: "Meeting Preparation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 5",
        description: "Design marketing materials",
        date: "2025-03-19",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 6",
        description: "Update client proposal",
        date: "2025-03-20",
        category: "Client Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 7",
        description: "Prepare quarterly report",
        date: "2025-03-21",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 8",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 9",
        description: "Create a marketing campaign",
        date: "2025-03-23",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Task 10",
        description: "Plan team-building event",
        date: "2025-03-24",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 11",
        description: "Design website prototype",
        date: "2025-03-25",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 12",
        description: "Research new business trends",
        date: "2025-03-26",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 13",
        description: "Complete SEO optimization",
        date: "2025-03-27",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 14",
        description: "Prepare annual performance review",
        date: "2025-03-28",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 15",
        description: "Improve product development process",
        date: "2025-03-29",
        category: "Product",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
    const employees=JSON.parse( localStorage.getItem("employees"))
    const admin=JSON.parse( localStorage.getItem("admin"))
    
    return {employees , admin}
}
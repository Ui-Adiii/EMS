const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    name: "Aditya",

    tasks: [
      {
        title: "Monthly Report",
        description: "Complete the monthly report",
        date: "2025-03-15",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Budget Analysis",
        description: "Prepare budget analysis",
        date: "2025-03-16",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Meeting",
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
    name: "Krish",
   
    tasks: [
      {
        title: "Team Meeting",
        description: "Prepare for team meeting",
        date: "2025-03-18",
        category: "Meeting Preparation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Marketing Materials",
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
    name: "Paresh",

    tasks: [
      {
        title: "Client Proposal",
        description: "Update client proposal",
        date: "2025-03-20",
        category: "Client Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Quarterly Report",
        description: "Prepare quarterly report",
        date: "2025-03-21",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Sales Strategy",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },{
        title: "Sales Strategy",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },{
        title: "Sales Strategy",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },{
        title: "Sales Strategy",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },{
        title: "Sales Strategy",
        description: "Review sales strategy",
        date: "2025-03-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },{
        title: "Sales Strategy",
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
    name: "Pradeep",
    email: "employee4@example.com",
    password: "123",

    tasks: [
      {
        title: "Marketing Campaign",
        description: "Create a marketing campaign",
        date: "2025-03-23",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        title: "Event Planning",
        description: "Plan team-building event",
        date: "2025-03-24",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Website Prototype",
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
    name: "Subha",
    email: "employee5@example.com",
    password: "123",

    tasks: [
      {
        title: "Business Research",
        description: "Research new business trends",
        date: "2025-03-26",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "SEO Optimization",
        description: "Complete SEO optimization",
        date: "2025-03-27",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Performance Review",
        description: "Prepare annual performance review",
        date: "2025-03-28",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Product Improvement",
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
    name:"Owner",
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
  {
    name:"god",
    id:2,
    email:"god@god.com",
    password:"123"
  }
]
export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
    const employees=JSON.parse( localStorage.getItem("employees"))
    const admin=JSON.parse( localStorage.getItem("admin"))
    
    return {employees , admin}
}
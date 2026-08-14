const employees = [
  {
    id: 1,
    email: "employee1@ems.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the EMS application.",
        taskDate: "2026-08-11",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build the main dashboard layout with cards and navigation.",
        taskDate: "2026-08-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing functionality for employees.",
        taskDate: "2026-08-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix Authentication Bug",
        taskDescription: "Resolve the login authentication issue reported by users.",
        taskDate: "2026-08-07",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Implement search functionality for employees and tasks.",
        taskDate: "2026-08-13",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@ems.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Prepare the monthly sales performance report.",
        taskDate: "2026-08-11",
        category: "Sales"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Customer Follow-up",
        taskDescription: "Contact existing customers regarding pending requirements.",
        taskDate: "2026-08-12",
        category: "Customer Service"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription: "Review and update customer information in the system.",
        taskDate: "2026-08-09",
        category: "Administration"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Complete Sales Presentation",
        taskDescription: "Prepare the presentation for the upcoming client meeting.",
        taskDate: "2026-08-06",
        category: "Sales"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend the scheduled meeting with the new client.",
        taskDate: "2026-08-14",
        category: "Meeting"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@ems.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize database queries to improve application performance.",
        taskDate: "2026-08-11",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Create API Endpoints",
        taskDescription: "Develop REST API endpoints for employee management.",
        taskDate: "2026-08-12",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create and verify the latest database backup.",
        taskDate: "2026-08-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Investigate and fix the employee API response error.",
        taskDate: "2026-08-07",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Implement secure authentication for the employee portal.",
        taskDate: "2026-08-15",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@ems.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Create Marketing Campaign",
        taskDescription: "Plan the upcoming digital marketing campaign.",
        taskDate: "2026-08-11",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Social Media Planning",
        taskDescription: "Prepare social media posts for the upcoming week.",
        taskDate: "2026-08-12",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Competitor Analysis",
        taskDescription: "Analyze competitor campaigns and pricing strategies.",
        taskDate: "2026-08-08",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Create and schedule the monthly customer email campaign.",
        taskDate: "2026-08-10",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Prepare Campaign Report",
        taskDescription: "Prepare performance metrics for the previous campaign.",
        taskDate: "2026-08-14",
        category: "Reporting"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@ems.com",
    password: "123",

    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Prepare Project Plan",
        taskDescription: "Create a detailed plan for the upcoming project.",
        taskDate: "2026-08-11",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Conduct the weekly team progress meeting.",
        taskDate: "2026-08-12",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        taskTitle: "Review Employee Performance",
        taskDescription: "Review employee performance and prepare feedback.",
        taskDate: "2026-08-09",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        taskTitle: "Submit Project Report",
        taskDescription: "Submit the final report for the completed project.",
        taskDate: "2026-08-07",
        category: "Reporting"
      },
      {
        active: true,
        newTask: true,
        failed: false,
        taskTitle: "Project Presentation",
        taskDescription: "Present the project progress to senior management.",
        taskDate: "2026-08-15",
        category: "Presentation"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@ems.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
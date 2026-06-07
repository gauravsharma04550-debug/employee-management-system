const employees = [
  {
    id: 1,
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create responsive login UI using React and Tailwind.",
        taskDate: "2026-06-07",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect login form with backend API.",
        taskDate: "2026-06-08",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Initialize React project and install dependencies.",
        taskDate: "2026-06-05",
        category: "Setup"
      }
    ]
  },

  {
    id: 2,
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-06-07",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Component",
        taskDescription: "Build reusable navbar component.",
        taskDate: "2026-06-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-06-03",
        category: "UI"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Create employee profile page.",
        taskDate: "2026-06-09",
        category: "Frontend"
      }
    ]
  },

  {
    id: 3,
    email: "amit@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB collections.",
        taskDate: "2026-06-07",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Express Setup",
        taskDescription: "Configure Express server.",
        taskDate: "2026-06-04",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Auth",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-06-10",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Password Reset",
        taskDescription: "Build forgot password feature.",
        taskDate: "2026-06-02",
        category: "Backend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Role Management",
        taskDescription: "Add admin and employee roles.",
        taskDate: "2026-06-11",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "neha@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing Login",
        taskDescription: "Test login functionality.",
        taskDate: "2026-06-05",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Verify dashboard features.",
        taskDate: "2026-06-08",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Report",
        taskDescription: "Prepare testing report.",
        taskDate: "2026-06-09",
        category: "QA"
      }
    ]
  },

  {
    id: 5,
    email: "rohit@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Frontend",
        taskDescription: "Deploy React app to production.",
        taskDate: "2026-06-07",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Git Setup",
        taskDescription: "Configure repository and branches.",
        taskDate: "2026-06-03",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "CI/CD Pipeline",
        taskDescription: "Create automated deployment pipeline.",
        taskDate: "2026-06-12",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migrate project to new server.",
        taskDate: "2026-06-01",
        category: "Infrastructure"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
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
    console.log(employees, admin)
}
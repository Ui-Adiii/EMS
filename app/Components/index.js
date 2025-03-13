import AuthProvider from "../Context/AuthProvider"
import Login from "./Auth/Login"
import AdminDashBoard from "./DashBoard/AdminDashBoard"
import EmployeeDahBoard from "./DashBoard/EmployeeDahBoard"
import AllTask from "./Others/AllTask"
import CreateTask from "./Others/CreateTask"
import Header from "./Others/Header"
import TaskListNumber from "./Others/TaskListNumber"
import TaskList from "./TaskList/TaskList"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStrorage"

export  {
    getLocalStorage,
    setLocalStorage,
    AuthProvider,
    AllTask,
    TaskList,
    Login,
    EmployeeDahBoard,
    Header,
    TaskListNumber,
    AdminDashBoard,
    CreateTask,
}
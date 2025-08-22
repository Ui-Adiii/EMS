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
import AcceptTask from "./TaskList/AcceptTask"
import FailedTask from "./TaskList/FailedTask"
import CompleteTask from "./TaskList/CompleteTask"
import NewTask from "./TaskList/NewTask"
import AuthContext from "../Context/AuthProvider"
export  {
    AuthContext,
    FailedTask,
    CompleteTask,
    NewTask,
    AcceptTask,
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
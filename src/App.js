import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom';
import Students from './Components/Pages/Students';
import ClassesTeachers from './Components/Pages/ClassesTeachers';
import Teachers from './Components/Pages/Teachers';
import Attendence from './Components/Pages/Attendence';
import Classes from './Components/Pages/Classes';
import Customers from './Components/Pages/Customers';
import Expenses from './Components/Pages/Expenses';
import Incomes from './Components/Pages/Incomes';
import Letters from './Components/Pages/Letters';
import Pages from './Components/Pages/Pages';
import Refferals from './Components/Pages/Refferals';
import Roles from './Components/Pages/Roles';
import Staff from './Components/Pages/Staff';
import Subjects from './Components/Pages/Subjects';
import SuperAdmins from './Components/Pages/SuperAdmins';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/students' element={<Sidebar content={<Students />} />} />
        <Route path='/ClassesTeachers' element={<Sidebar content={<ClassesTeachers />} />} />
        <Route path='/teachers' element={<Sidebar content={<Teachers />} />} />
        <Route path='/attendence' element={<Sidebar content={<Attendence />} />} />
        <Route path='/classes' element={<Sidebar content={<Classes />} />} />
        <Route path='/customers' element={<Sidebar content={<Customers />} />} />
        <Route path='/expenses' element={<Sidebar content={<Expenses />} />} />
        <Route path='/incomes' element={<Sidebar content={<Incomes />} />} />
        <Route path='/letters' element={<Sidebar content={<Letters />} />} />
        <Route path='/pages' element={<Sidebar content={<Pages />} />} />
        <Route path='/refferals' element={<Sidebar content={<Refferals />} />} />
        <Route path='/roles' element={<Sidebar content={<Roles />} />} />
        <Route path='/staff' element={<Sidebar content={<Staff />} />} />
        <Route path='/subjects' element={<Sidebar content={<Subjects />} />} />
        <Route path='/superAdmins' element={<Sidebar content={<SuperAdmins />} />} />
      </Routes>
    </div>
  );
}

export default App;

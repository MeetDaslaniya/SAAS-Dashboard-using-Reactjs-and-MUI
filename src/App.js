import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.css';
import "./App.css";
import Demo from "./Component/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Analytics from "./Component/Analytics";
import Invoice from "./Component/Invoice";
import Schedule from "./Component/Schedule";
import Settings from "./Component/Settings";
import Notification from "./Component/Notification";
import Messages from "./Component/Messages";
import Calendar from "./Component/Calendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TaskPreview from "./Component/TaskPreview";
import ProductAnalytics from "./Component/ProductAnalytics";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />

          <Route
            path="/home"
            element={
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Demo />
              </LocalizationProvider>
            }
          >
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Invoice" element={<Invoice />} />
            <Route path="Analytics" element={<Analytics />} />
            <Route path="Schedule" element={<Schedule />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Messages" element={<Messages />} />
            <Route path="Notification" element={<Notification />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Calendar/TaskPreview" element={<TaskPreview />} />
            <Route path="Schedule/TaskPreview" element={<TaskPreview />} />
            <Route path="ProductAnalytics" element={<ProductAnalytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;

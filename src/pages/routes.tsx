import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Account from "./Account/Account";
import Error from "./Error";
import HomePage from "./HomePage/HomePage";




export default () => (
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
   </Routes>
)
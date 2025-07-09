import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";


const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> }
]);


const Body = () => {
  return (<RouterProvider router={appRouter} />);
}

export default Body


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Browse from "./Browse";

// const Body = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/browse" element={<Browse />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Body;

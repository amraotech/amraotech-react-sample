import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Company from "../pages/company/Company";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import JoinAsMarketer from "../pages/join-as-markter/JoinAsMarketer";
import Join from "../pages/join/Join";
import Services from "../pages/services/Services";
import Dashboard from "../layout/Dashboard";
import MarketersDashboard from "../pages/dashboards/marketers/MarketersDashboard";
import Profile from "../pages/dashboards/marketers/child-pages/Profile"
import JobOffers from "../pages/dashboards/marketers/child-pages/JobOffers";
import PaymentDetails from "../pages/dashboards/marketers/child-pages/PaymentDetails";
import MyTeams from "../pages/dashboards/marketers/child-pages/MyTeams";
import Websites from "../pages/dashboards/marketers/child-pages/Websites";
import Projects from "../pages/projects/Projects";
import TestPage from "../pages/testPage/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/company", element: <Company /> },
      { path: "/join-as-marketer", element: <JoinAsMarketer /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/join", element: <Join /> },
      { path: "/projects", element: <Projects /> },
      { path: "/test-page", element: <TestPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <MarketersDashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "job-offers",
        element: <JobOffers />,
      },
      {
        path: "payment-details",
        element: <PaymentDetails />,
      },
      {
        path: "my-teams",
        element: <MyTeams />,
      },
      {
        path: "websites",
        element: <Websites />,
      },
    ],
  },
]);

export default router;

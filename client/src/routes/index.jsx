import LandingPage from "../components/landing/LandingPage.jsx";
import FoodDashboard from "../components/FoodPage/FoodDashboard.jsx";

let indexRoutes = [
    { path: "/", name:"LandingPage", component: LandingPage },
    { path: "/food", name:"FoodDashboard", component: FoodDashboard }
];

export default indexRoutes;
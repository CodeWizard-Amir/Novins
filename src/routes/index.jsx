import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Collaboration from "../pages/Collaboration";
import EachArticle from "../pages/EachArticle";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import CommonQsn from "../pages/CommonQsn";
import Blog from "../pages/Blog";
import ServiceTariff from "../pages/ServiceTariff";

export const novinRoutes = createBrowserRouter([
    {
        path :'/',
        element : <Home />
    },
    {
        path :'/Collaboration',
        element : <Collaboration />
    },
    {
        path :'/Article/:id',
        element : <EachArticle />
    },
    {
        path :'/about-us',
        element : <AboutUs />
    },
    {
        path :'/Contact-us',
        element : <ContactUs />
    },
    {
        path :'/Common-Qsn',
        element : <CommonQsn />
    },
    {
        path :'/Blog',
        element : <Blog />
    },
    {
        path :'/Services-Tariff',
        element : <ServiceTariff />
    },
])

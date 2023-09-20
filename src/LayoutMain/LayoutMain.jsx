import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const LayoutMain = () => {
    return (
        <section>
    <div>
        <nav className="flex justify-around bg-slate-200 py-4 shadow-xl">
            <h2 className="text-3xl font-bold">Amazon</h2>
            <ul className="flex gap-5 justify-end mr-8">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
            </ul>
        </nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    </section>
    );
};

export default LayoutMain;
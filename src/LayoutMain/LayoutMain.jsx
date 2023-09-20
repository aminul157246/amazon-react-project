import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
const LayoutMain = () => {
  const navigation = useNavigation();
  return (
    <section>
      <div>
        <nav className="flex justify-around bg-slate-200 py-4 shadow-xl">
          <h2 className="text-3xl font-bold">Amazon</h2>
          <ul className="flex gap-5 justify-end mr-8">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-slate-500" : ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-slate-500" : ""
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-slate-500" : ""
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
        {navigation.state === "loading" ? (
          <p> Fuck you.......</p>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </div>
    </section>
  );
};

export default LayoutMain;

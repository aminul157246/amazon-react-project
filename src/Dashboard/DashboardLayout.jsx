import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        
        <>
        <div>
            <h1 className='text-center text-8xl '>I am static Dashboard</h1></div>
            <div className="flex justify-between mx-60 mt-32">
        <div className="bg-pink-200 w-32 p-4">
            <ul>
                <li>
                    <Link to = '/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to = '/dashboard/profile'>Profile</Link>
                </li>
                <li>
                    <Link to = '/dashboard/editProfile'>Edit Profile</Link>
                </li>
            </ul>
        </div>
        <div>
        <Outlet></Outlet>
        </div>
        </div>
        </>

    );
};

export default DashboardLayout;
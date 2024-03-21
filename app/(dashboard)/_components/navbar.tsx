import MobileSidebar from "@/app/(dashboard)/_components/mobile-sidebar";
import NavbarRoutes from "@/components/ui/navbar-routes";

const Navbar = () => {
    return (
        <div className={"p-4 border-b h-full flex items-center bg-white shadow-sm"}>
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    );
};

export default Navbar;
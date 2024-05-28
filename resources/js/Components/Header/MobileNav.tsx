import { useNavBarStore } from "../../stores/navbar";
import { XIcon } from "../Icons/XiCON";
import { NavButton } from "./NavButton";
import { NavLink } from "./NavLink";

interface Props {
    className?: string;
}
export const MobileNav = (props: Props) => {
    const { className } = props;
    const isMobileNav = useNavBarStore((state) => state.isMobileNav);
    const toggleMobileNav = useNavBarStore((state) => state.toggleMobileNav);
    const toggleMobileCategoriesNav = useNavBarStore(
        (state) => state.toggleMobileCategoriesNav
    );
    return (
        <div
            className={` animate-fade-down animate-once animate-ease-in-out
          ${
              isMobileNav
                  ? "absolute top-0 w-full h-full bg-white px-5 py-10 transition ease-linear max-lg:z-40 "
                  : "hidden"
          }
            ${className}`}
        >
            <div className="flex justify-end">
                <NavButton callback={toggleMobileNav}>
                    <XIcon />
                </NavButton>
            </div>

            <div className="flex flex-col uppercase text-center gap-y-4 font-semibold">
                <NavLink href="/" className="hover:text-red-600  ">
                    Nuevo
                </NavLink>
                <NavButton
                    callback={toggleMobileCategoriesNav}
                    className="uppercase hover:text-red-600  "
                >
                    Categories
                </NavButton>
                <NavLink href="/" className="hover:text-red-600  ">
                    Sucursales
                </NavLink>
                <NavLink href="/" className="hover:text-red-600  ">
                    Liquidaciones
                </NavLink>
            </div>
        </div>
    );
};

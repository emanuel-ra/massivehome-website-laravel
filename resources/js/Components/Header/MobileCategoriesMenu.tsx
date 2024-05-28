import { Link } from "@inertiajs/react";
import { Categories } from "../../interfaces/category";
import { useNavBarStore } from "../../stores/navbar";
import { XIcon } from "../Icons/XiCON";
import { NavButton } from "./NavButton";
interface Props {
    className?: string;
    categories: Categories;
}
export const MobileCategoriesMenu = (props: Props) => {
    const { className, categories } = props;
    const isMobileCategories = useNavBarStore(
        (state) => state.isMobileCategories
    );
    const toggleMobileCategoriesNav = useNavBarStore(
        (state) => state.toggleMobileCategoriesNav
    );

    return (
        <>
            <div
                className={` animate-fade-down animate-once animate-ease-in-out overflow-y-auto overflow-x-hidden
          ${
              isMobileCategories
                  ? "absolute top-0 w-full  bg-white px-5 py-10 transition ease-linear  max-lg:z-50 "
                  : "hidden"
          }
          ${className}`}
            >
                <div className="flex justify-end">
                    <NavButton callback={toggleMobileCategoriesNav}>
                        <XIcon />
                    </NavButton>
                </div>
                <div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-2 gap-y-2 ">
                        {categories?.map((category) => (
                            <li key={category.id}>
                                <Link
                                    className="font-semibold tracking-wide hover:text-red-600  transition ease-in-out border-b-2 border-transparent "
                                    href={`/tienda/${category.id}`}
                                >
                                    {category.name}
                                </Link>

                                <ul>
                                    {category.children?.map((child) => (
                                        <li key={child.id} className="indent-2">
                                            <Link
                                                className="font-medium tracking-wide hover:text-red-600  transition ease-in-out border-b-2 border-transparent "
                                                href={`/tienda/${child.id}`}
                                            >
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

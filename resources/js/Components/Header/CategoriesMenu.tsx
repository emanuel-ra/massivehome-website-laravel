import { Link } from "@inertiajs/react";
import { Categories } from "../../interfaces/category";
import { useNavBarStore } from "../../stores/navbar";

interface Props {
    categories: Categories;
}
export const CategoriesMenu = (props: Props) => {
    const isCategoriesNav = useNavBarStore((state) => state.isCategoriesNav);
    const { categories } = props;
    return (
        <div
            className={`animate-fade-down animate-once animate-ease-in-out px-10 lg:z-50 ${
                isCategoriesNav
                    ? "absolute left-0 top-[90px] w-full bg-white grid grid-cols-1 lg:grid-cols-3 "
                    : "hidden"
            }`}
        >
            <div className="col-span-2">
                <ul className="grid grid-cols-1 lg:grid-cols-4 px-4 py-2 border-r gap-y-2 ">
                    {categories?.map((category) => (
                        <li key={category.id}>
                            <Link
                                className="font-semibold tracking-wide hover:text-red-600  transition ease-in-out border-b-2 border-transparent hover:border-slate-600"
                                href={`/tienda/${category.id}`}
                            >
                                {category.name}
                            </Link>

                            <ul>
                                {category.children?.map((child) => (
                                    <li key={child.id} className="indent-2">
                                        <Link
                                            className="font-medium tracking-wide hover:text-red-600  transition ease-in-out border-b-2 border-transparent hover:border-slate-600"
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
            <div className="flex flex-col justify-center items-center gap-y-2">
                <Link href={`/`}>
                    <img
                        src="/images/50OFF.webp"
                        alt={`selected items are up to 50% off`}
                    />
                </Link>
                <span className="text-slate-700 font-semibold">
                    selected items are up to 50% off
                </span>
            </div>
        </div>
    );
};

import { categories } from "@/mooks/categories.mook";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useCartStore } from "../stores/cart";
import { useNavBarStore } from "../stores/navbar";
import { CategoriesMenu } from "./Header/CategoriesMenu";
import { MobileCategoriesMenu } from "./Header/MobileCategoriesMenu";
import { MobileNav } from "./Header/MobileNav";
import { NavButton } from "./Header/NavButton";
import { NavLink } from "./Header/NavLink";
import { HeartIcon } from "./Icons/HeartIcon";
import { MenuIcon } from "./Icons/MenuIcon";
import { SearchIcon } from "./Icons/SearchIcon";
import { ShoppingIcon } from "./Icons/ShoppingIcon";
import { UserIcon } from "./Icons/UserIcon";

export const Header = () => {
    // const { categories, GetCategories } = useGetCategories();

    const toggleMobileNav = useNavBarStore((state) => state.toggleMobileNav);
    const toggleCategoriesNav = useNavBarStore(
        (state) => state.toggleCategoriesNav
    );
    const toggleSearchingNav = useNavBarStore(
        (state) => state.toggleSearchingNav
    );
    const toggleDisplayingCart = useCartStore(
        (state) => state.toggleDisplayingCart
    );
    const totalItems = useCartStore((state) => state.totalItems);

    const handleSubmit = () => {
        const keyword = (
            document.getElementById("searchingInput") as HTMLInputElement
        ).value;
        const form = document.getElementById("formSearch") as HTMLFormElement;

        if (keyword === "") {
            toggleSearchingNav();
        } else {
            form.submit();
        }
    };

    const isSearching = useNavBarStore((state) => state.isSearching);

    useEffect(() => {
        // GetCategories();
    }, []);

    return (
        <>
            <nav
                className={`relative flex lg:flex-row items-center justify-between py-4 uppercase ${
                    isSearching ? "px-5" : "px-5 lg:px-10"
                }`}
            >
                <div
                    className={`${
                        isSearching
                            ? "hidden"
                            : "flex justify-center items-center gap-10"
                    } `}
                >
                    <Link href={route("dashboard")}>
                        <img
                            src="/images/logo.webp"
                            className="w-28 lg:w-56 h-auto transition ease-in hover:scale-125"
                            alt="Massive Home disfruta tu hogar"
                        />
                        <h1 className="sr-only"> Massive Home </h1>
                    </Link>

                    <div className="hidden lg:flex lg:gap-4 font-semibold">
                        <NavLink
                            href="/"
                            className="hover:text-red-600 hover:border-slate-600 "
                        >
                            Nuevo
                        </NavLink>
                        <NavButton
                            callback={toggleCategoriesNav}
                            className="uppercase hover:text-red-600 hover:border-slate-600 "
                        >
                            Categorías
                        </NavButton>
                        <NavLink
                            href="sucursales"
                            className="hover:text-red-600 hover:border-slate-600 "
                        >
                            Sucursales
                        </NavLink>
                        <NavLink
                            href="/"
                            className="hover:text-red-600 hover:border-slate-600 "
                        >
                            Liquidaciones
                        </NavLink>
                    </div>
                </div>

                <div
                    className={`relative flex gap-x-2 lg:gap-x-4 items-center ${
                        isSearching ? "w-full" : ""
                    }`}
                >
                    <div
                        className={`
            ${
                isSearching
                    ? "flex justify-center items-center absolute w-full bg-white left-0 border rounded shadow"
                    : ""
            }`}
                    >
                        <form
                            id="formSearch"
                            action="/tienda"
                            method="get"
                            className={` transition ease-linear ${
                                isSearching ? "w-full" : "hidden"
                            }`}
                        >
                            <input
                                required
                                id="searchingInput"
                                type="text"
                                className={`w-full h-11 px-4`}
                                placeholder="search..."
                                name="search"
                            />
                        </form>
                        <NavButton
                            className={`py-2 transition ease-linear ${
                                isSearching ? "px-4" : ""
                            }`}
                            callback={handleSubmit}
                        >
                            <SearchIcon className="size-6 hover:scale-125 transition" />
                        </NavButton>
                    </div>

                    <NavLink href="/" className="py-2">
                        <UserIcon className="size-6 hover:scale-125 transition" />
                    </NavLink>
                    <NavLink href="/" className="py-2">
                        <HeartIcon className="size-6 hover:scale-125 transition hover:fill-red-500" />
                    </NavLink>

                    <NavButton
                        className={`${
                            isSearching ? "hidden" : "py-2 relative"
                        }`}
                        callback={toggleDisplayingCart}
                    >
                        {totalItems > 0 && (
                            <span
                                className={`absolute flex p-2.5 text-xs -top-3 -right-2.5 bg-black text-white rounded-full size-5 items-center justify-center font-semibold shadow transition`}
                            >
                                {totalItems}
                            </span>
                        )}
                        <ShoppingIcon className="size-6 hover:scale-125 transition" />
                    </NavButton>

                    <NavButton
                        className={`py-2 lg:hidden`}
                        callback={toggleMobileNav}
                    >
                        <MenuIcon className="size-6 hover:scale-125 transition" />
                    </NavButton>
                </div>

                <CategoriesMenu categories={categories} />
            </nav>
            <MobileNav />
            <MobileCategoriesMenu categories={categories} />
        </>
    );
};

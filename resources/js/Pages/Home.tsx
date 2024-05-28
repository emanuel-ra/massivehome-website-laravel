import { Header } from "@/Components/Header";
import { Notice } from "@/Components/Header/Notice";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex justify-center w-[390px] md:w-screen max-w-[1920px] h-dvh overflow-x-hidden ">
                <div className="flex flex-col w-full">
                    <header className="h-32">
                        <Notice />
                        <Header />
                    </header>
                    {/* <Outlet />
                    <AsideCart /> */}
                </div>
            </div>
        </>
    );
}

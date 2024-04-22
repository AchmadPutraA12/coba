import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

const AdminLayout = ({ children }) => {
    const { component } = usePage();
    const { auth } = usePage().props;
    // console.log(auth);
    return (
        <>
            <header className="bg-black text-white py-8 px-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-2xl">Todo</h2>
                        <nav className="flex justify-between items-center">
                            <div className="flex gap-6 items-center justify-start">
                                <Link
                                    href="/"
                                    className={`${component == "Dashboard"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href="/produk"
                                    className={`${component == "Admin/Produk/Index"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Produk
                                </Link>
                                <Link
                                    href="/color"
                                    className={`${component == "Admin/Color/Index"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Color
                                </Link>
                                <Link
                                    href="/detail-ruangan"
                                    className={`${component == "Admin/DetailRuangan/Index"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Detail
                                </Link>
                                <Link
                                    href="/ruangan"
                                    className={`${component == "Admin/Ruangan/Index"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Ruangan
                                </Link>
                                <Link
                                    href="/todo"
                                    className={`${component == "User/Todo"
                                        ? "font-semibold text-indigo-500"
                                        : ""
                                        }`}
                                >
                                    Todo
                                </Link>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button>
                                            {auth.user.name}
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Logout
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="mt-10">
                <div className="container mx-auto">{children}</div>
            </main>
        </>
    );
};

export default AdminLayout;

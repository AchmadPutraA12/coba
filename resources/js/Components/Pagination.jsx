import { Link } from '@inertiajs/react'
import React from 'react'

const Pagination = ({ todos }) => {
    const links = todos.links;
    const currentPage = todos.current_page;
    const lastPage = todos.last_page;

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={link.url}
                                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${link.active
                                    ? "bg-slate-300 dark:bg-slate-200"
                                    : "bg-white dark:bg-gray-800"
                                    } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${i == 0 && "rounded-s-md"
                                    } ${i == links.length - 1 && "rounded-e-md"} ${link.current
                                    } ${i == 0 && currentPage == 1 && "hidden"} ${currentPage == lastPage && i == links.length - 1 && "hidden"}`}
                            >
                                <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>

    )
}

export default Pagination
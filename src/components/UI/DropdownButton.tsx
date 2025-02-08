'use client';
import React from "react";
import SignOutButton from "./Auth/SignOutButton";

interface DropdownButtonProps {
    label: string;
    profileImageUrl: string;
}

const DropdownItems = [
    { label: 'Profile', url: '/profile' },
];

// TODO: Handle click outside
const DropdownButton: React.FC<DropdownButtonProps> = ({ label, profileImageUrl }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setOpen(!open)}
            >
                <div className="flex flex-row items-center gap-2">
                    <img src={profileImageUrl} alt="profile" className="w-6 h-6 rounded-full" />
                    <span>{label}</span>
                </div>

                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* // <!-- Dropdown menu --> */}
            {
                open && (
                    <div id="dropdown" className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            {DropdownItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.url}
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <SignOutButton />
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>

    )

}

export default DropdownButton
import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../../icons/logo-main.svg';

export default function Header() {
    return (
        <header className="top-0 left-0 right-0 z-50 bg-[#4d0e02]/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24 pt-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="MovieArchive Logo"
                            width={80}
                            height={80}
                            className="hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Navigation - Centered */}
                    <nav className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-16">
                            <Link
                                href="/"
                                className="text-white hover:text-secondary transition-colors text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[#dfddcb]"
                            >
                                Home
                            </Link>
                            <Link
                                href="/explore"
                                className="text-white hover:text-secondary transition-colors text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[#dfddcb]"
                            >
                                Explore
                            </Link>
                            <Link
                                href="/about"
                                className="text-white hover:text-secondary transition-colors text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[#dfddcb]"
                            >
                                About
                            </Link>
                        </div>
                    </nav>

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/login"
                            className="text-white hover:text-secondary transition-colors text-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-secondary"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
} 
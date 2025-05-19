import React from 'react';
import AppLayout from '@layouts/AppLayout';
import Footer from '@components/Footer';

export default function Home() {
    return (
        <AppLayout>
            {/* Hero Section */}
            <div className="relative h-[70vh] bg-primary pt-16">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-nimbus">
                                Discover Your Next Favorite Movie
                            </h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-200">
                                Explore our vast collection of movies, from timeless classics to the latest releases.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Search movies..."
                                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-secondary"
                                />
                                <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 rounded-lg text-white font-semibold transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-white">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Action', 'Drama', 'Comedy', 'Sci-Fi'].map((category) => (
                        <div
                            key={category}
                            className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold group-hover:scale-110 transition-transform">
                                    {category}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Latest Movies */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Latest Movies</h2>
                    <button className="text-secondary hover:text-secondary/80 font-semibold">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[1, 2, 3, 4, 5].map((movie) => (
                        <div key={movie} className="group">
                            <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="font-semibold text-white group-hover:text-secondary transition-colors">
                                Movie Title {movie}
                            </h3>
                            <p className="text-sm text-gray-300">2024 • Action</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </AppLayout>
    );
} 
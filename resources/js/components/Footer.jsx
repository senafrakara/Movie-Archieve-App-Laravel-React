import React from 'react';

export default function Footer() {
    return (
        <footer>
            {/* Newsletter Section */}
            <div className="bg-primary/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Subscribe to our newsletter for the latest movie updates and exclusive offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-secondary flex-1"
                            />
                            <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 rounded-lg text-white font-semibold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 
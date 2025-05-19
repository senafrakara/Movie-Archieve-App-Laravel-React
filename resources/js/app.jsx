import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';

// Import assets
import.meta.glob([
    '../images/**',
    '../fonts/**',
    '../videos/**',
    '../icons/**',
]);

// Initialize the progress bar
InertiaProgress.init({
    // The delay after which the progress bar will appear, in milliseconds
    delay: 250,
    // The color of the progress bar
    color: '#2c7366', // Using your secondary color from tailwind config
    // Whether to include the default NProgress styles
    includeCSS: true,
    // Whether the NProgress spinner will be shown
    showSpinner: false,
});

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx', { eager: true })),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );
    },
}); 
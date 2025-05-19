import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';
import AppLayout from './Layouts/AppLayout';

// Import assets
import.meta.glob([
    '../images/**',
    '../fonts/**',
    '../videos/**',
    '../icons/**',
]);

// Initialize the progress bar
InertiaProgress.init({
    delay: 250,
    color: '#dfddcb',
    includeCSS: true,
    showSpinner: false,
});

createInertiaApp({
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx', { eager: true }));
        page.then((module) => {
            module.default.layout = module.default.layout || <AppLayout>{page}</AppLayout>;
        });
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );
    },
}); 
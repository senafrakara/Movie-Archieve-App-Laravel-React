import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@icons': path.resolve(__dirname, './public/icons'),
            '@components': path.resolve(__dirname, './resources/js/Components'),
            '@pages': path.resolve(__dirname, './resources/js/Pages'),
            '@assets': path.resolve(__dirname, './resources/js/assets'),
            '@layouts': path.resolve(__dirname, './resources/js/Layouts'),

        },
    },
});

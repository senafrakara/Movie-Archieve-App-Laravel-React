# Movie Archive App

A modern web application built with Laravel, React, and Inertia.js for managing and exploring movies.

## Tech Stack

- **Backend**: Laravel (PHP)
- **Frontend**: React with Inertia.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Features

- [ ] Movie listing and search
- [ ] Movie details view
- [ ] User authentication
- [ ] User favorites
- [ ] Movie categories
- [ ] Responsive design

## Prerequisites

- PHP >= 8.1
- Node.js >= 16
- Composer
- MySQL/PostgreSQL

## Installation

1. Clone the repository:
```bash
git clone [https://github.com/senafrakara/Movie-Archieve-App-Laravel-React.git]
cd Movie-Archieve-App-Laravel-React
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Configure your database in `.env` file

7. Run migrations:
```bash
php artisan migrate
```

8. Start the development server:
```bash
php artisan serve
```

9. In a separate terminal, start Vite:
```bash
npm run dev
```

## Project Structure

```
├── app/                 # Laravel application code
├── resources/
│   ├── js/             # React components and JavaScript
│   │   ├── Pages/      # Inertia page components
│   │   └── app.jsx     # Main React entry point
│   ├── css/            # Styles
│   └── views/          # Blade templates
├── routes/             # Application routes
└── public/             # Public assets
```

## Development

- The application uses Inertia.js for seamless integration between Laravel and React
- Tailwind CSS is used for styling
- Vite is configured for asset bundling and hot module replacement

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is open-sourced software licensed under the [MIT license](LICENSE).

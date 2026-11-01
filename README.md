# Weather exercise

A standalone Laravel 10, Vue 3, Inertia, and Tailwind project for a short web development interview exercise. It has one page at `/weather-exercise` and one empty server action at `GET /api/weather`.

## Start the project

Requirements: PHP 8.1+, Composer, and Node.js.

```sh
cp .env.example .env
composer install
npm install
php artisan key:generate
```

Run `npm run dev` and `php artisan serve` in separate terminals, then open `http://127.0.0.1:8000/weather-exercise`.

## Candidate task

In 15 minutes, connect the button to the server endpoint, show the current temperature and a readable weather condition in the empty panel, and change the panel background based on the condition. Keep the result readable on mobile.

Use [Open-Meteo's free forecast API](https://open-meteo.com/en/docs) with no API key. For Boston, use latitude `42.3601` and longitude `-71.0589`. Request current temperature and weather code using:

```text
https://api.open-meteo.com/v1/forecast?latitude=42.3601&longitude=-71.0589&current=temperature_2m,weather_code&temperature_unit=fahrenheit
```

The finished flow should have the browser request weather from `GET /api/weather`, the Laravel action call Open-Meteo and return a small JSON response, and Vue render the temperature, condition, and condition-based panel color.

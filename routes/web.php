<?php

use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/weather-exercise', fn () => Inertia::render('WeatherExercise'))->name('weather-exercise');
Route::get('/api/weather', [WeatherController::class, 'getWeather'])->name('weather.get');

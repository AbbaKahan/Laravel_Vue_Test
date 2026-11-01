<template>
    <div class="min-h-screen bg-white text-ink">
        <header class="border-b border-slate-200 bg-white shadow-sm">
            <div class="mx-auto flex h-20 max-w-7xl items-center px-6">
                <span class="text-lg font-extrabold tracking-tight text-slateblue">Weather</span>
            </div>
        </header>

        <main class="mx-auto max-w-7xl px-6 py-12 sm:py-16">
            <div class="max-w-4xl">
                <p class="text-sm font-extrabold uppercase tracking-widest text-slateblue">
                    Local conditions
                </p>
                <h1 class="mt-3 text-3xl font-extrabold sm:text-4xl">Weather in Boston</h1>
                <p class="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                    Get current conditions for Boston, Massachusetts.
                </p>

                <section class="mt-10 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-stretch">
                    <button
                        type="button"
                        class="inline-flex min-h-14 items-center justify-center rounded-lg bg-slateblue px-7 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-slateblue focus:ring-offset-2"
                    >
                        Get Weather
                    </button>
                    <div
                        class="min-h-40 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:min-h-20"
                        aria-live="polite"
                    ></div>
                </section>
            </div>
        </main>
    </div>
</template>

# VTB GeoGuesser

## Запуск в dev-окружении (Docker-way)

1. `npm install`
1. `cp .env.example .env`
1. `npm run dev:up`
1. `npm run db:migrate`
1. `npm run dev`

## Запуск в dev-окружении (common-way)

1. `npm install`
1. `cp .env.example .env`
1. Указать DB_URL в `.env`
1. `npm run db:migrate`
1. `npm run dev`
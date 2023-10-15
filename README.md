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

## Документация

После запуска просмотреть информацию касательно API можно по адресу `localhost:5000/api/v1/docs`

## Note

Спасибо за крутое мероприятие! ❤️

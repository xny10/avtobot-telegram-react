## Локальная разработка
Для запуска localhost сайта из-под телеграм бота необходимо скачать ngrok, установить api ключ и прописать команду 

`ngrok http https://localhost:3000 --host-header="localhost3000"`

Фронтенд же при этом запускается командой

`yarn start-https`
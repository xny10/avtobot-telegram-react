## Локальная разработка
Для запуска localhost сайта из-под телеграм бота необходимо скачать ngrok, установить api ключ и прописать команду 

`ngrok http https://localhost:3000 --host-header="localhost:3000"`

Фронтенд же при этом запускается командой

`yarn start-https`

## TODO
1. кнопку сохранить перенести в шапку в layout и добавить disabled состояние
2. темы телеграмма прокинуть в тему mui
3. сделать защиту от скролла вверх DONE
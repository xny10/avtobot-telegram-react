## Разработка
1. Скопировать `.env.example` в `.env` и прописать переменные среды
2. Выполнить `yarn`
3. Выполнить `yarn start`
## Запуск с telegram
1. Создать telegram бота, запустить бэкенд
2. Для запуска localhost сайта из-под бота необходимо скачать ngrok, установить api ключ и выполнить
`ngrok http https://localhost:3000 --host-header="localhost:3000"`
1. Запустить фронтенд
`yarn start-https`

## TODO
1. вынести все field(s) в features, вынести стилизованный select в ui
2. выключить прокрутку при открытии форм - актуально для компов
3. SF pro display для айфонов - возможно для айфонов ег оможно просто указать от device detector

### Tar packaging
tar -cvzf build_v3.tar.gz E:\work\avtobot-mwp\avtobot-telegram-react\build
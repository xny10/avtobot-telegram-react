## Локальная разработка
Для запуска localhost сайта из-под телеграм бота необходимо скачать ngrok, установить api ключ и прописать команду 

`ngrok http https://localhost:3000 --host-header="localhost:3000"`

Фронтенд же при этом запускается командой

`yarn start-https`

## TODO
1. dependable ranges - если цена ОТ 2кк, то цена ДО не должна включать значения до 2кк
2. предупреждение при выходе из несохраненного фильтра
3. сделать анимацию для fullscreen dialog
4. вынести все field(s) в features, вынести стилизованный select в ui
5. выключить прокрутку при открытии форм - актуально для компов

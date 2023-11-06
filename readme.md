## Локальная разработка
Для запуска localhost сайта из-под телеграм бота необходимо скачать ngrok, установить api ключ и прописать команду 

`ngrok http https://localhost:3000 --host-header="localhost:3000"`

Фронтенд же при этом запускается командой

`yarn start-https`

## TODO
1. Добавить и "назад" в фильтр и раздел регион/город
2. темы телеграмма прокинуть в тему mui - DONE
3. сделать защиту от скролла вверх - DONE
4. Dependable ranges - если цена ОТ 2кк, то цена ДО не должна включать значения до 2кк
5. haptic feedback для сохранения фильтра - DONE
6. предупреждение при выходе из несохраненного фильтра
7. Инпут марка-модель - DONE
8. Сделать анимацию для fullscreen dialog
9. Вынести все field(s) в features, вынести стилизованный select в ui
10. выключить прокрутку при открытии форм
11. pointer курсор при наведении на инпут марка-модель и регион-город
12. мемоизировать отдельные input fields
# Anyunderhood

Читайте, как [создать новый сайт](NEW-UNDERHOOD.md) для underhood.

Коллективный твиттер-аккаунт с новым автором каждую неделю

## Проект

<details><summary>Файлы</summary>

- `authors.js` — список авторов
- `gulpfile.babel.js` — сборщик gulp сайта
- `webpack.config.babel.js` — конфиг для js
- `package.json`, `.editorconfig`, `.eslintrc`, `.gitignore` — переносимое окружение
- `.travis.yml` — конфиг для тревиса
- `.deploy.sh` — деплой с тревиса
- `README.md`

</details>

<details><summary>Дамп</summary>

- `scripts/update.js` — апдейт дампа
- `dump/index.js` — получение дампа
- `dump/*.json` — дамп информации об авторах ('tweets', 'info', 'followers', 'media')
- `dump/images/` — дамп изображений авторов
- `helpers/` — хелперы

</details>

<details><summary>Сайт</summary>

- `css/` — CSS для сайта
- `layouts/` — Шаблоны для сайта
- `static/` — статические файлы для сайта
- `pages/` — маркдаун страницы на сайте

</details>

### Как помочь

1. `authors.js` - дополнить новыми авторами. username, дата первого твита, id первого твита.
2. Подать пулл-реквест :)
3. После принятия запустится билд, добавит последнего автора на сайте.

### Как обновить локально

1. `npm run update` - соберет новый дамп для последнего юзера, его твитов с `first` до текущего момента...
2. `npm start` - запустит локально копию сайта на `localhost:4000`
3. `npm run build` - создаст статику в `dist/` для деплоя.

> В проекте есть скрипты для обновления массива авторов. ([update-list.js](scripts/updater/update-list.js)) При этом данные об аккаунте возьмутся с текущего @mobileunderhood (локация, аватар, баннер). Пока-что исправить это можно только вручную.

> Подтянуть актуальные изменения из anyunderhood можно. Добавьте шаблон anyunderhood как новый remote, и сделайте cherry-pick нужных коммитов.

<details>
<summary><b>Известные проблемы/ограничения</b></summary>

1. Сайт работает только с корневым адресом. Ссылки не относительны, поэтому `*.github.io/newunderhood` не будет работать корректно. Только из корня — `*.github.io/`.
2. Обновление работает на 100% только для последнего автора. Берётся информация (аватар, фон, описание, местоположение) об андерхуд аккаунте на момент запуска скрипта update. Поэтому достать информацию о прошлом авторе пока не возможно (некоторые авторы не имеют своего аккаунта или ставят не ту информацию, которой хотели бы делиться в момент авторства в андерхуд).
3. Дамп необходимо держать внутри репозитория. Твиттер имеет ограничение в 3200 постов, которые можно достать из его API. Поэтому, чтобы отобразить старые посты, их нужно где-то хранить. Сейчас это дамп.

</details>

##### Авторы

Обращайтесь к [@agapov_one](https://twitter.com/agapov_one) или [tgkd](https://github.com/tgkd) за любой помощью с этим шаблоном или вашим underhood. (anyunderhood)

Спасибо [@iamstarkov](https://twitter.com/iamstarkov) за разработку первой версии, [@suxxes](https://twitter.com/suxxes) за продолжение и курирование [@abroadunderhood](https://twitter.com/abroadunderhood), [@igrekde](https://twitter.com/igrekde) за курирование [@mobileunderhood](https://twitter.com/mobileunderhood), [@produnderhood](https://twitter.com/produnderhood).

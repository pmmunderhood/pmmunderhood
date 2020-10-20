# Новый андерхуд

### Как создать новый сайт андерхуда.

Используйте [_шаблон_](https://github.com/anyunderhood/anyunderhood).

- Измените информацию о твиттер-аккаунте в [underhood.js](underhood.js)
- [Получите ключи](https://apps.twitter.com/app/new) от Twitter API. Для использования с [npm/twit](https://github.com/ttezel/twit)
- [Опционально] обновите [`.CNAME`](static/CNAME) -> `CNAME` (без точки) с нужным доменом
- Обновите `pages/*.md` файлы. Напишите то, что считаете нужным.
- Добавьте последнего автора в `authors.js` через pull request (запустит `npm run update`)

> Сейчас добавление автора возможно только в момент смены. Например, в понедельник перед тем, как появляется новый автор - добавляется pull request с информацией об авторе в `authors.js`, запускается скрипт update - создается дамп сообщений - выкладывается новая версия на сайт.

<details>
<summary>Какие ENV параметры нужны для запуска <code>npm run update</code>`?</summary>

`TWITTER_CONSUMER_KEY`

`TWITTER_CONSUMER_SECRET`

`TWITTER_ACCESS_TOKEN_KEY`

`TWITTER_ACCESS_TOKEN_SECRET`

</details>

Вопросы можно задать [@agapov_one](https://twitter.com/agapov_one).

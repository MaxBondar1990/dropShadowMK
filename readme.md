# Збірка gulp 2022...

В цьому репозиторії ви знайдете актуальну збірку GULP для створення html оптимізованих застосунків. Та налаштування роботи git - контроль версій.

> **Примітка**: Керуючись данною інструкцією ви скопіюєте, розпакуєте та встановите майже автоматично усі файли та розширення для роботи gulp

## Що вміє збірка
- автоматично створювати локальний сервер, відкривати в ньому index.html, та слідкувати за оновленням файлів під час роботи над проектом, автоматично оновлювати браузер для перегляду результату.
- Збирати та зберігати частини з html, css, js файлів.
- Працює з SCSS. Формує css та зберігає у проект результат
- Оптимізує зображення в WEBP
- Автоматично формує та зберігає шрифти проекту
- Автоматично формує та зберігає svg sprite
- Та багато інших можливостей

## Процес налаштування git
1. Створіть теку нового проекту. Наприклад myNewSite.
2. Відкрийте термінал в даній теці
3. Ініціюйте роботу git у цій теці
```
   git init
```
> **Примітка**: В теці проекту буде створено прихований файл '.git' в цій теці будуть зберігатися усі локальні налаштування git. якщо її видалити усі налаштування зникнуть. 
4. Завантажте мій gulp на свою локальну машину.
```
   git pull https://github.com/MaxBondar1990/dropShadowMK.git
```
> **Примітка**: Локально вже можна працювати над проектом. Як розпакувати gulp описано нажче

## Підключення проекту до gitHub
1. Потрібно створити новий репозиторій на своєму акаунті gitHub. Наприклад 'testMyGulp'.
2. Встановити зв'язок локального комп'ютера з репозиторієм
> **Примітка**: Для цього змініть посилання з мого прикладу на посилання на ваш новий репозиторій. Його можно знайти на сторінці щойно створеного репозиторію.
```
   git remote add origin https://github.com/MaxBondar1990/dropShadowMK.git
```
3. Відправити дані до нового репозиторія
```
   git push -u origin master
```

Тепер якщо ви оновите сторінку репозиторію в браузері - побачите всі файли з вашого локального репозиторію - на gitHub. Таким чином, на цьому етапі ми створили копію даного пакету gulp на вашому локальному комп'ютері, під'єднали його до системи контролю версій git, та пов'язали це все з віддаленим репозиторієм giHub.
Тепер є можливість використовувати gulp git та gitHub. Створювати версії та гілки.

Після деяких команд які можуть бути корисні в майбутньому ви знайдете інструкцію до розпаковки gulp

## Деякі команди для роботи з git
1. Побачити усі команди програми контролю версій
```
   git --help
```
1. ініціалізація git
```
   git init
```
2. Перевірка статусу git
```
   git status
```
3. Отримання останніх оновлень з репозиторію
```
   git pull
```
4. Зафіксувати всі зміни для створення версії
```
   git add .
```
або для конкретного файлу
```
   git add fileName.html
```
5. Фіксація змін перед відправкою git 
```
   git commit -m 'comment on what you did in the upd'
```
6. Відправка оновлень на git 
```
   git push
```

## Використання gulp

Перше що потрібно зробити - інсталювати Node.js на власний комп'ютер. Це можна зробити, наприклад з офіційного сайту:
```
https://nodejs.org/uk/
```
Якщо Node вже встановлений на Ваш комп'ютер, перевстановлювати необов'язково..

Для використання моєї збірки, після завантеження стартового проекту на локальний комп'ютер, в теку проекту потрібно виконати наступні дії, або виконати дії описані в коментарях файлу 'gulpfiles.js':
1. Запустіть команду інсталювання gulp у теку проекту
```
   npm i
```
> **Примітка**: gulp автоматично створить усі необхідні розширення для своєї роботи. Це займе деякий час
2. Запустіть gulp в режимі розробника

```
   npm run dev
```
>**Примітка**: Після запуску gulp відкриється браузер із стартовим шаблоном. Де буде інформація по роботі із застосунком. Як створювати svg sprite та шрифти та таке іншею Це займе деякий час

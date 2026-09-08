# Гушни 🐾

Сайт за осиновяване на пет спасени котенца. Направен с [Astro](https://astro.build) +
[Tailwind CSS](https://tailwindcss.com), публикуван чрез GitHub Pages на `gushni.me`.

## Как да добавиш ново коте

1. Копирай някой от файловете в `src/content/cats/` (напр. `niki.md`) и го преименувай на
   името на новото коте, транслитерирано на латиница (напр. `mimi.md`).
2. Смени данните в горната част на файла (frontmatter):

   ```yaml
   ---
   name: Мими
   gender: женско        # "мъжко" или "женско"
   age: "~3 месеца"
   color: сиво-бяла
   personality:
     - Игрива
     - Нежна
   status: свободно       # "свободно" | "запазено" | "осиновено"
   image: /images/cats/mimi/cover.jpg   # незадължително — виж по-долу
   order: 7
   ---
   ```

3. Под чертата (`---`) напиши кратко описание на котето — това е текстът, който се показва на
   страницата му.
4. За да добавиш снимка: сложи файла в `public/images/cats/<име>/cover.jpg` и посочи същия път в
   полето `image`. Ако не добавиш снимка, автоматично се показва рисунка placeholder — сайтът
   работи чисто и без снимки.
5. За допълнителна галерия използвай полето `gallery` с списък от пътища:

   ```yaml
   gallery:
     - /images/cats/mimi/1.jpg
     - /images/cats/mimi/2.jpg
   ```

## Как да добавиш нова новина в Дневника

1. Създай нов файл в `src/content/updates/`, напр. `nova-novina.md`.
2. Попълни frontmatter-а:

   ```yaml
   ---
   title: Заглавие на новината
   date: 2026-09-10
   excerpt: Кратко резюме, показвано в списъка с новини.
   relatedCats: ["niki", "kiti"]   # имената на файловете на свързаните котета, незадължително
   ---
   ```

3. Под чертата напиши самата новина — приема се Markdown (параграфи, **удебелен текст** и т.н.).

## Смяна на статус (осиновено / запазено)

Просто отвори файла на котето в `src/content/cats/` и смени полето `status` на `осиновено` или
`запазено`. Промяната се вижда веднага след `npm run dev` (локално) или след пренасяне (push) в
GitHub (на живо).

## Смяна на снимката за споделяне в социални мрежи (Open Graph)

Изображението, което се показва при споделяне на сайта във Facebook/Instagram/Twitter, е
`public/images/og-image.png` (1200×630). Изходният `.svg` файл е в `scripts/og-image.svg` — след
редакция генерирайте наново PNG-то с:

```sh
npx rsvg-convert -w 1200 -h 630 scripts/og-image.svg -o public/images/og-image.png
```

(изисква инсталиран `librsvg2-bin` / `rsvg-convert`). Всяко коте и всяка новина може да има и своя
собствена снимка за споделяне — просто задайте `image:` в неговия frontmatter.

## Локална разработка

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # генерира финалния сайт в ./dist
npm run preview   # преглед на build-натия сайт
```

## Деплой (публикуване)

Всеки `git push` към `main` автоматично пуска GitHub Action (`.github/workflows/deploy.yml`),
който build-ва сайта и го публикува през GitHub Pages на `gushni.me`. Уверете се, че в
настройките на repo-то (**Settings → Pages**) source-ът е "GitHub Actions" и че custom domain-ът
`gushni.me` е зададен (DNS-ът трябва да сочи към GitHub Pages).

## Технически данни за контакт

Смени placeholder контактите (имейл, телефон, социални мрежи) в `src/pages/kontakti.astro`.

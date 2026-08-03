# Учебный React-проект

Этот репозиторий представляет собой учебный проект на React + TypeScript + Vite, созданный для закрепления знаний и выполнения домашних заданий уровня Pre-Junior / Junior.

## Общая идея

Проект состоит из нескольких учебных разделов:

- `Pre-junior` — первые практические домашки по типизации, работе с данными, компонентам и тестам.
- `Junior` — более сложные задания с собственными компонентами, управлением состояния, редьюсерами и интерактивными элементами.
- `Junior Plus` — запасное место для расширения домашек, пока не заполнено.

Кроме учебных страниц, в `App` реализован простой счётчик на Redux Toolkit, чтобы показать работу глобального состояния.

## Технологии

- React 19
- TypeScript
- React Router DOM (`HashRouter`)
- Redux Toolkit
- ESLint + Prettier

## Быстрый старт

1. Установите зависимости:

```bash
pnpm install
```

2. Запустите локальный сервер разработки:

```bash
pnpm run dev
```

3. Откройте приложение в браузере по адресу, который покажет Vite.

## Скрипты

- `pnpm run dev` — запуск приложения в режиме разработки
- `pnpm run test` — запуск тестов Vitest

## Структура проекта

- `src/main.tsx` — входной файл, который монтирует React, подключает Redux Provider.
- `src/app/App.tsx` — главный компонент приложения.
- `src/app/store.ts` — Redux store, подключается редьюсер `counter`.
- `src/commun/` — общие компоненты, хуки и утилиты.
    - `components/` — переиспользуемые UI-компоненты.
    - `hooks/` — кастомные хуки `useAppDispatch` и `useAppSelector`.
    - `localStorage/` — утилиты `saveState` / `restoreState`.
- `src/features/` — функциональные фичи и учебные страницы.
    - `counter/` — простой редьюсер и компонент счётчика.
    - `s2/ui/main/` — учебная часть с роутингом, страницами и домашками.

## Архитектура учебной части

В `src/features/s2/ui/main/` расположены основные учебные компоненты:

- `Main.tsx` — оболочка с `HashRouter` и `Layout`.
- `Pages.tsx` — объявление маршрутов.
- `sidebar/Sidebar.tsx` — меню навигации между разделами.
- `header/Header.tsx` — заголовок страницы.

Маршруты:

- `/pre-junior` — страница `PreJunior`
- `/junior` — страница `Junior`
- `/junior-plus` — страница `JuniorPlus`
- `/error404` — страница ошибки

### Утилиты

- `src/commun/localStorage/localStorage.ts` — функции `saveState` и `restoreState` для сохранения данных в браузере.

### Хуки

- `src/commun/hooks/useAppDispatch.ts` — типизированный `useDispatch`.
- `src/commun/hooks/useAppSelector.ts` — типизированный `useSelector`.

## Redux-счётчик

Файл: `src/features/counter/ui/Counter/Counter.tsx`

- простой локальный счетчик с добавлением +1, +3 и сбросом.
- ограничение максимального значения `<= 15`.
- редьюсер `src/features/counter/model/counter-reducer.ts`.
- селектор `src/features/counter/model/counter-selector.ts`.

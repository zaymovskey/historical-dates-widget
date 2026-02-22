import { HistoricalPeriod } from "./types";

export const historicalPeriods: HistoricalPeriod[] = [
  {
    id: 1,
    label: "Космическая эра",
    yearFrom: 1957,
    yearTo: 1969,
    events: [
      {
        id: 101,
        year: 1957,
        description: "Запуск «Спутник-1» — первый искусственный спутник Земли"
      },
      {
        id: 102,
        year: 1959,
        description: "Первая фотография обратной стороны Луны («Луна-3»)"
      },
      { id: 103, year: 1961, description: "Юрий Гагарин — первый человек в космосе" },
      {
        id: 104,
        year: 1965,
        description: "Алексей Леонов — первый выход в открытый космос"
      },
      { id: 105, year: 1969, description: "Высадка экипажа Apollo 11 на Луну" }
    ]
  },
  {
    id: 2,
    label: "Технологическая революция",
    yearFrom: 1971,
    yearTo: 1991,
    events: [
      { id: 201, year: 1971, description: "Создание первого микропроцессора Intel 4004" },
      { id: 202, year: 1975, description: "Основание Microsoft" },
      { id: 203, year: 1981, description: "Выход IBM PC" },
      { id: 204, year: 1984, description: "Презентация Apple Macintosh" },
      { id: 205, year: 1991, description: "Публикация World Wide Web Тимом Бернерсом-Ли" }
    ]
  },
  {
    id: 3,
    label: "Интернет и цифровая эпоха",
    yearFrom: 1995,
    yearTo: 2007,
    events: [
      { id: 301, year: 1998, description: "Основание Google" },
      { id: 302, year: 2001, description: "Запуск Wikipedia" },
      { id: 303, year: 2004, description: "Появление Facebook" },
      { id: 304, year: 2005, description: "Запуск YouTube" },
      { id: 305, year: 2007, description: "Презентация первого iPhone" }
    ]
  },
  {
    id: 4,
    label: "Электромобили и ИИ",
    yearFrom: 2010,
    yearTo: 2017,
    events: [
      { id: 401, year: 2010, description: "Активный рост рынка электромобилей" },
      {
        id: 402,
        year: 2012,
        description: "Tesla Model S выходит в массовое производство"
      },
      {
        id: 403,
        year: 2014,
        description: "Расширение автономных систем помощи водителю"
      },
      { id: 404, year: 2016, description: "AlphaGo побеждает чемпиона мира по игре го" },
      {
        id: 405,
        year: 2017,
        description: "Презентация электрического грузовика Tesla Semi"
      }
    ]
  },
  {
    id: 5,
    label: "Космос 2.0",
    yearFrom: 2015,
    yearTo: 2022,
    events: [
      {
        id: 501,
        year: 2015,
        description: "Первое успешное возвращение первой ступени Falcon 9"
      },
      { id: 502, year: 2018, description: "Запуск Falcon Heavy" },
      { id: 503, year: 2020, description: "Crew Dragon доставляет астронавтов на МКС" },
      { id: 504, year: 2021, description: "Запуск миссии Artemis I" },
      {
        id: 505,
        year: 2022,
        description: "Телескоп James Webb передаёт первые изображения"
      }
    ]
  },
  {
    id: 6,
    label: "Современные технологии",
    yearFrom: 2023,
    yearTo: 2025,
    events: [
      { id: 601, year: 2023, description: "Массовое внедрение генеративного ИИ" },
      {
        id: 602,
        year: 2023,
        description: "Расширение AI-ассистентов в повседневной жизни"
      },
      { id: 603, year: 2024, description: "Рост локальных LLM-моделей" },
      { id: 604, year: 2024, description: "Интеграция AI-агентов в бизнес-процессы" },
      {
        id: 605,
        year: 2025,
        description: "Автономные AI-системы в промышленности и сервисах"
      }
    ]
  }
];

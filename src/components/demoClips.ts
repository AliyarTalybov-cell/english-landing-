export const clips = {
  roadmap: "Задания Roadmap A2",
  listening: "Аудирование и закладки",
  vocabulary: "Тесты по словам",
  assistant: "Диалог с ИИ",
  messages: "Чат и прогресс",
  whiteboards: "Доски",
  "teacher-editor": "Редактор уроков и прогресс",
  "teacher-groups": "Чаты и задания для группы",
} as const;

export type Clip = keyof typeof clips;

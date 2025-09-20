import { Stack } from "expo-router";
/**
 * КОРНЕВОЙ LAYOUT ПРИЛОЖЕНИЯ
 * 
 * Этот файл определяет основную структуру навигации всего приложения.
 * Stack - это навигационный стек, который управляет переходами между экранами.
 * 
 * ЧТО ДЕЛАЕТ:
 * - Создает навигационный стек для всего приложения
 * - Определяет общие настройки для всех экранов
 * - Управляет заголовками и стилями навигации
 * 
 * НАСТРОЙКИ (options):
 * - headerShown: true/false - показывать/скрывать дефолтный заголовок сверху
 * - title: "Заголовок" - текст в заголовке
 * - headerStyle: { backgroundColor } - стиль шапки
 * - headerTintColor: цвет текста заголовка
 * 
 * СТРУКТУРА URL:
 * Файлы в папке app/ автоматически становятся маршрутами:
 * - app/index.tsx → /
 * - app/profile.tsx → /profile
 * - app/user/[id].tsx → /user/123 (динамический параметр)
 */
export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}} />;
}

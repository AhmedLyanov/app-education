import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
/**
 * ГЛАВНЫЙ ЭКРАН ПРИЛОЖЕНИЯ (/)
 * 
 * Это стартовая страница, которая открывается при запуске приложения.
 * Соответствует маршруту "/" (корневой путь).
 * 
 * КОМПОНЕНТЫ:
 * - View: Контейнер (аналог div в вебе)
 * - Text: Текстовый элемент
 * - Button: Кнопка
 * - Link: Навигационная ссылка Expo Router
 * 
 * СТИЛИЗАЦИЯ:
 * React Native использует Flexbox по умолчанию
 * - flex: 1 - занимает все доступное пространство
 * - justifyContent: выравнивание по вертикали
 * - alignItems: выравнивание по горизонтали
 * - gap: расстояние между элементами
 * 
 * НАВИГАЦИЯ:
 * - href="/profile" - путь к целевому экрану
 * - asChild - передает свойства дочернему компоненту (Button)
 */
export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Главная страница</Text>
      <Link href="/profile" asChild>
        <Button title="Перейти в профиль" />
      </Link>
    </View>
  );
}
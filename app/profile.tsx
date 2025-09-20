import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
/**
 * ЭКРАН ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ (/profile)
 * 
 * Этот файл создает маршрут /profile для отображения профиля пользователя.
 * 
 * СПОСОБЫ НАВИГАЦИИ:
 * 1. <Link href="/"> - декларативная навигация (рекомендуется)
 * 2. router.push("/") - программная навигация
 * 3. router.back() - вернуться назад
 * 
 * ВАЖНО ДЛЯ TYPESCRIPT:
 * Expo Router строго типизирован! Пути должны точно соответствовать файловой структуре:
 * - app/profile.tsx → href="/profile"
 * - app/user/index.tsx → href="/user/index"
 * - app/settings/notifications.tsx → href="/settings/notifications"
 * 
 * ЕСЛИ ВОЗНИКАЮТ ОШИБКИ ТИПОВ:
 * 1. Проверьте правильность пути
 * 2. Убедитесь что файл существует в папке app/
 * 3. Перезапустите TS сервер: Ctrl+Shift+P → "TypeScript: Restart TS Server"
 */
export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Это профиль пользователя!</Text>
      <Link href="/" asChild>
        <Button title="Вернуться на главную" />
      </Link>
      <Button title="Открыть сообщение" onPress={() => alert("Привет Мир!")}/>
    </View>
  );
}
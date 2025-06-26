import { View, Text, Image } from "react-native";
import NavigateBar from "../components/navegacion";
const sos = require("../assets/svg/jardin.jpg");
export default function Main() {
  return (
    <View className="w-full h-full justify-between p-4 bg-white">
      <View className="flex-row flex-wrap w-full gap-4 pt-6 justify-center">
        <View className="w-[45%] aspect-square min-w-[360px] max-w-[200px] rounded-xl bg-emerald-800 overflow-hidden items-center shadow-md">
          <Image
            source={require("../assets/svg/jardin.jpg")}
            className="w-full h-3/4"
            resizeMode="cover"
          />
          <Text className="font-bold text-xl p-2 text-white text-center">
            Tu jardín
          </Text>
        </View>

        <View className="w-full md:w-[60%] lg:w-[45%] bg-gray-200 rounded-xl p-4 shadow-md">
          <Text className="font-bold text-2xl p-2 text-black text-center">
            Tareas Pendientes
          </Text>
          <View className="w-full gap-3 mt-2">
            {[1, 2, 3, 4].map((item) => (
              <View
                key={`task-${item}`}
                className="bg-white rounded-lg w-full h-12 justify-center px-3 shadow-sm"
              >
                <Text className="text-gray-800">Tarea {item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <NavigateBar></NavigateBar>
    </View>
  );
}

import { Image, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/ButtonsAndInputs/UInput";
import Button from "@/components/ButtonsAndInputs/UButton";
import Divider from "@/components/ButtonsAndInputs/UDivider";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView className="flex h-full justify-center items-center px-7 bg-[#FFF6EF]">
      <ThemedView className="mb-5 relative bg-[#FFF6EF]">
        <ThemedText type="title" className="z-10">
          Welcome To DiscountsLK
        </ThemedText>
        <Image
          className="absolute -bottom-2 -right-2"
          source={require("@/assets/images/fancy-underline.png")}
          style={{ width: 200, height: 40, resizeMode: "contain" }}
        />
      </ThemedView>

      <ThemedText type="default" className="text-center">
        Welcome back! Sign in to access your account and explore the latest
        discounts around you with DiscountsLK.
      </ThemedText>

      {/* Card for inputs */}
      <View className="w-full bg-white rounded-lg p-6 mt-6 shadow-lg">
        <ThemedView className="mb-5">
          <Input
            placeholder="johnsmith@example.com"
            keyboardType="email-address"
            label="Email Address"
          />
        </ThemedView>
        <ThemedView className="mb-4">
          <Input
            placeholder="••••••••"
            keyboardType="default"
            secureTextEntry={true} // To make it a password field
            label="Password"
          />
        </ThemedView>
        <Button
          textStyle={{ color: "white", fontSize: 14 }}
          gradientColors={["#E99D23", "#F5640A"]}
          onPress={() => console.log("Sign In")}
        >
          Sign In
        </Button>
        <Divider />
        <Button
          textStyle={{ color: "white", fontSize: 14 }}
          gradientColors={["black", "black"]}
          onPress={() => router.push("/(app)/auth/sign-up")}
        >
          Dont't Have An Account ?
        </Button>
        <ThemedView className="pt-4">
          <Button
            style={{ borderWidth: 1, borderColor: "#F5640A33" }}
            textStyle={{ color: "#CE420FCC", fontSize: 14 }}
            gradientColors={["#EB874026", "#EB874026"]}
            onPress={() => router.push("/")}
          >
            Continue Without An Account
          </Button>
        </ThemedView>
      </View>
    </ThemedView>
  );
}

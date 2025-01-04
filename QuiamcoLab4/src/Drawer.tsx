// DrawerContent.js
import { View, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function DrawerContent(props) {
  const router = useRouter();

  const handleLogout = async () => {
    router.replace("/");
  };

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: top }}
      >
        <View style={[styles.header, { paddingTop: 20 + top }]}>
          <Image
            source={require("../assets/images/resources/logo.png")}
            style={styles.logo}
          />
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
          labelStyle={styles.logoutLabel}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  logo: {
    alignSelf: "center",
    height: 150,
    width: 150,
  },
  logoutLabel: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
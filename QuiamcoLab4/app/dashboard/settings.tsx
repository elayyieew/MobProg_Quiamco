import { SafeAreaView, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SettingsPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appearanceSection}>
        <List.Item
          title="Appearance"
          description="Theme, date & time format"
          left={() => (
            <MaterialCommunityIcons name="palette" size={30} color="black" />
          )}
        />
      </View>

      <View style={styles.settingSection}>
        <List.Item
          title="Account Settings"
          description="Manage your account details"
          left={() => <List.Icon icon="account" />}
        />
      </View>

      <View style={styles.settingSection}>
        <List.Item
          title="Help & Support"
          description="Get help and support"
          left={() => <List.Icon icon="help-circle" />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  appearanceSection: {
    marginBottom: 20,
  },
  settingSection: {
    marginBottom: 15,
  },
});
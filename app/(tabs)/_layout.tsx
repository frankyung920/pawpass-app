import NotificationButton from "@/components/NotificationButton";
import TabIcon from "@/components/TabIcon";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 105,
          flexDirection: "row",
          justifyContent: "space-between",
          elevation: 4,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 4,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },
        headerTitleStyle: {
          fontFamily: "pop-b",
          fontSize: 16,
        },
        headerRight: () => <NotificationButton />,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.brand.tertiary,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"home"} focused={focused} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="travel"
        options={{
          title: "Travel",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"travel"} focused={focused} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="id"
        options={{
          title: "ID",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"id"} focused={focused} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="myDog"
        options={{
          title: "My Dog",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"myDog"} focused={focused} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon color={color} name={"profile"} focused={focused} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}

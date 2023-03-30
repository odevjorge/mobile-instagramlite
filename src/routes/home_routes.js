import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "../pages/accounts/login"
const Tab = createBottomTabNavigator();
export default function AccountsRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="login" component={} />
        </Tab.Navigator>
    );

}
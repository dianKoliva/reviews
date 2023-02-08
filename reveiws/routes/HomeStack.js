import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { createAppContainer } from "react-navigation";

const screens={
    Home:{
        screen:Home,
        navigationOptions:{
            title:"GameZone",
            // headerStyle:{BackgroundColor:"pink"}
        }

    },
ReviewDetails:{

    screen:ReviewDetails,
    navigationOptions:{
        title:"Review Details",
       
    }
}
}

const HomeStack=createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:"#444",
        headerStyle:{backgroundColor:"gray"}
    }
});
export default createAppContainer(HomeStack);
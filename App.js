import RootNavigation from './navigation';
import {SafeAreaView, StatusBar, View} from "react-native";
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{height: StatusBar.currentHeight, backgroundColor:'#c2c2c2'}}></View>
      <AuthProvider>
        <DataProvider>
          <RootNavigation/>
        </DataProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

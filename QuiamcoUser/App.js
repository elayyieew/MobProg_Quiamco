import Profile from './components/Profile.js';
import Background from './components/Background.js';
import { SafeAreaView, View} from 'react-native';

export default function App() {
  return (
    <View>
      <Background/>
    </View>,
    <SafeAreaView>
      <Profile/>
    </SafeAreaView>
  );
}

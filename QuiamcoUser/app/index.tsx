import { StyleSheet,SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Actions from '../components/Actions';
import Bio from '../components/Bio';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Actions/>
      <Bio/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
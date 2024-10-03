import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.tag}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatar}
                source={require('@/assets/images/avatar.png')}
                width={20}
                height={20}
              />
            </View>
            <Text style={styles.tagname}>Luis Locon</Text>
          </View>
          <Text>
            <Ionicons size={20} name="scan-outline" />
          </Text>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginBottom: 10,
  },
  tag: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagname: {
    fontWeight: '700',
    paddingLeft: 5,
    fontSize: 18,
    verticalAlign: 'middle',
  },
  tagScan: {},
  avatar: {
    borderRadius: 50,
    height: 25,
    width: 25,
    backgroundColor: '#eee',
  },
});

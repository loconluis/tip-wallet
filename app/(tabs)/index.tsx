import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Transaction from '@/components/Transaction';
import { trnx } from '@/constants/seed';
import AmountBigBox from '@/components/AmountBigBox';
import { Link } from 'expo-router';
import ActionButton from '@/components/ActionButton';

export default function HomeScreen() {
  return (
    <>
      <ParallaxScrollView>
        <ThemedView style={styles.titleContainer}>
          <AmountBigBox amount="GTQ 20,489.45" />
        </ThemedView>
        <ThemedView style={styles.actionsContainer}>
          <ActionButton
            text="Enviar"
            arrowUp
            onPress={() => {
              console.log('Enviar');
            }}
          />
          <ActionButton
            text="Recibir"
            arrowDown
            onPress={() => {
              console.log('Recibir');
            }}
          />
        </ThemedView>
        <ThemedView
          style={{
            height: 150,
            backgroundColor: '#dffe33',
            borderRadius: 10,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: '300', letterSpacing: 1.5 }}>
            Haz Tip Tap !
          </Text>
        </ThemedView>
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsTitlesContainer}>
            <ThemedText type="subtitle">Movimientos</ThemedText>
            {/* @ts-ignore */}
            <Link href="/transactions">
              <Text style={styles.seeMore}>Ver más</Text>
            </Link>
          </View>
          <View>
            {trnx.reverse().map((item, key) => (
              <Transaction
                key={key}
                place={item.place}
                expense={item.expense}
                date={item.date}
                currency={item.currency}
              />
            ))}
          </View>
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  transactionsContainer: {
    gap: 8,
    marginBottom: 8,
  },
  transactionsTitlesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 0.4,
    paddingBottom: 15,
  },
  seeMore: {
    textDecorationLine: 'underline',
  },
});

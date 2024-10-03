import ActionButton from '@/components/ActionButton';
import AmountBigBox from '@/components/AmountBigBox';
import LineChartCustom from '@/components/LineChart';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Transaction from '@/components/Transaction';
import { btcTrnx } from '@/constants/seed';
import { useFetchBTC } from '@/hooks/useFetchBTC';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type Props = {};

const crypto = (props: Props) => {
  const { data, error } = useFetchBTC();
  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <AmountBigBox amount="BTC 0.0098772" />
      </ThemedView>
      <ThemedView
        style={{
          height: 220,
          borderRadius: 10,
          marginVertical: 10,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
              GTQ 500,000,000
            </Text>
            {<LineChartCustom />}
          </View>
        }
        {error && (
          <View>
            <Text>Los datos no estan disponibles</Text>
          </View>
        )}
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
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsTitlesContainer}>
          <ThemedText type="subtitle">Movimientos</ThemedText>
          {/* @ts-ignore */}
          <Link href="/transactions">
            <Text style={styles.seeMore}>Ver más</Text>
          </Link>
        </View>
        <View>
          {btcTrnx.reverse().map((item, key) => (
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
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  actionsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
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

export default crypto;

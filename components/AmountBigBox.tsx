import { View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

type Props = {
  amount: string;
};

const AmountBigBox = (props: Props) => {
  return (
    <View style={styles.balanceBox}>
      <ThemedText style={styles.balanceText} type="title">
        {props.amount}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceBox: {
    flex: 1,
    backgroundColor: '#f6f3f3',
    borderRadius: 15,
    height: 150,
    justifyContent: 'center',
  },
  balanceText: {
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default AmountBigBox;

import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  place: string;
  expense: string;
  date: string;
  currency?: string;
};

const Transaction = (props: Props) => {
  const formatter = new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: props.currency,
    maximumFractionDigits: 10,
  });
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.place}>{props.place}</Text>
        <Text style={styles.expense}>{`- ${formatter.format(
          parseFloat(props.expense)
        )}`}</Text>
      </View>
      <View>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 1,
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: '#f0efef',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  place: {
    fontSize: 20,
    fontWeight: '600',
  },
  expense: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
  },
  date: {
    fontSize: 10,
    color: Colors.light.icon,
  },
});

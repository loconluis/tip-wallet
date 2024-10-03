import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type Props = {
  text: string;
  arrowDown?: boolean;
  arrowUp?: boolean;
  onPress: () => void;
  hideIcon?: boolean;
};

const ActionButton = (props: Props) => {
  let typeArrow = 'arrow-up-outline';
  if (props.arrowDown) {
    typeArrow = 'arrow-down-outline';
  }

  return (
    <TouchableHighlight
      style={styles.actionButton}
      onPress={props.onPress}
      underlayColor={'#464646'}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}
      >
        {!props.hideIcon && props.arrowUp && (
          <Ionicons size={15} name="arrow-up-outline" color={'white'} />
        )}
        {!props.hideIcon && props.arrowDown && (
          <Ionicons size={15} name="arrow-down-outline" color={'white'} />
        )}
        <Text style={styles.actionText}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
    height: 50,
    backgroundColor: '#000',
  },
  actionText: {
    gap: 4,
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

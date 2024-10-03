import { Colors } from '@/constants/Colors';
import { View } from 'react-native';
import { LineChart, lineDataItem } from 'react-native-gifted-charts';

interface IData {
  value: string;
}

interface Props {
  data: lineDataItem[];
}

const LineChartCustom = () => {
  const _data = [
    { value: 6 },
    { value: 4 },
    { value: 9 },
    { value: 7 },
    { value: 7 },
    { value: 9.5 },
    { value: 10 },
    { value: 6 },
    { value: 5 },
    { value: 4 },
    { value: 7 },
    { value: 10 },
    { value: 11 },
  ];
  return (
    <View
      style={{
        marginTop: 15,
        padding: 0,
        overflow: 'scroll',
        margin: 0,
        borderRadius: 10,
        transform: [
          {
            scale: 1.1,
          },
        ],
      }}
    >
      <LineChart
        isAnimated
        thickness={3}
        adjustToWidth
        stepValue={1}
        areaChart
        hideYAxisText
        hideAxesAndRules
        curved
        hideDataPoints
        data={_data}
        startFillColor="rgb(66, 69, 37)"
        startOpacity={0.5}
        endFillColor="#e0fe33"
        endOpacity={0.5}
        scrollToEnd
        initialSpacing={0}
        backgroundColor={Colors['light'].background}

        //   pointerConfig={{}}
      />
    </View>
  );
};

export default LineChartCustom;

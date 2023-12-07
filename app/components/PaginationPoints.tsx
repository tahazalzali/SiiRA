import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from 'app/theme';

interface PaginationProps {
  pointsNumber: number;
  activeIndex: number;
  style?: ViewStyle;
}

const PaginationPoints: FC<PaginationProps> = ({ pointsNumber, activeIndex, style }) => {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {Array.from({ length: pointsNumber }, (_, index) => (
        <View
          key={index}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: index === activeIndex ? colors.orange : colors.green,
            marginHorizontal: 4,
          }}
        />
      ))}
    </View>
  );
};

export default PaginationPoints;

import React from 'react';
import {View} from 'react-native';

const Gap = ({height, width}: {height?: number; width?: number}) => {
  return <View style={{height, width}} />;
};

export default Gap;

import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBackDark} from '../../../assets';

const IconOnly = ({onPress, icon}: {onPress?: any; icon?: string}) => {
  const Icon = () => {
    switch (icon) {
      case 'back-dark':
        return <IconBackDark />;
      case 'back-light':
        return <IconBackDark />;
      default:
        return <IconBackDark />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

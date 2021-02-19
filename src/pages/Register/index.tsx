import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Registration" />
      <View style={styles.container}>
        <Input label="Full Name" />
        <Gap height={20} />
        <Input label="Work" />
        <Gap height={20} />
        <Input label="Email" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Countinue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

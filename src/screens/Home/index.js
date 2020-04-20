import React from 'react';
import {Text} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import { Wrapper,Container, Header, BalanceContainer, BalanceTitle, Balance} from './styles';

import Suggestions from '../../Components/Suggestions';
import Activities from '../../Components/Activities';
import Tips from '../../Components/Tips';
import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e"/>
        </Header>

        <Suggestions />

        <Activities />

        <Tips/>

        <Banner/>
      </Container>
    </Wrapper>
  )
}
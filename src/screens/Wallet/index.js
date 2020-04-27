import React, {useState} from 'react';
import { Switch } from 'react-native';

import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Tittle, 
  BalanceContainer, 
  Value, Bold,
  EyeButton,
  Infor,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTittle,
  PaymentMethods,
  PaymentMethodsTittle,
  Card,
  CardBody,
  CardDetails,
  CardTittle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import credtCard from '../../images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setuseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  function handleToggleUseBalance() {
    setuseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Container>
        <Header colors={
          useBalance ? ['#00fc6c', '#00ac4a'] : ['#d3d3d3','#868686']
        }>
          <HeaderContainer>
            <Tittle>Saldo picPay</Tittle>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ?'0,00': '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye': 'eye-off'} size={28} color="#fff"/>
              </EyeButton>
            </BalanceContainer>
            <Infor>Seu saldo está redendo 100% de CDI</Infor>
            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" color="#fff" size={28}/>
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" color="#fff" size={20}/>
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTittle>
            Usar saldo ao pagar
          </UseBalanceTittle>
          <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
          />

        </UseBalance>
        <PaymentMethods>
            <PaymentMethodsTittle>
              Forma de pagamento
            </PaymentMethodsTittle>
          

          <Card>
            <CardBody>
              <CardDetails>
                <CardTittle>
                  Cadastre-se seu cartão de crédito.
                </CardTittle>
                <CardInfo>
                  Cadastre-se seu catão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img source={credtCard} resizeMode="contain"/>
            </CardBody>
            <AddButton>
              <AntDesign name="pluscircleo" color="#0DB060" size={30}/>
              <AddLabel>Adicionar Cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060"/>
            </UseTicketButton>
            <UseTicketLabel>Usar Ticker Promocional</UseTicketLabel>
          </UseTicketContainer>
        </PaymentMethods>
      </Container>
    </Wrapper>
  );
}
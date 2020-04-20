import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';


import { 
  Container, 
  Header, 
  Tittle, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFootter,
  Details,
  Value,
  Divider,
  Data,
  Actions,
  Option,
  OptionLabel, } from './styles';
import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Tittle>Atividades</Tittle>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@rodrigoandrade</Bold> 
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Rodrigo Andrade</UserName>
        </CardBody>

        <CardFootter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
              <Feather name="lock" color="#fff" size={14}/>
              <Data>há 2 anos </Data>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFootter>

      </Card>


    </Container>
  );
}
import React from 'react'
import { 
  Section,
  Header,
  Menu,
  Cover, 
  Grid,
  DecorEllipse,
  Logo,
  Account,
  Burger,
  Image,
  Title,
  Card,
  ContentWrapper,
  EllipseSmall
} from "../components"
import smile1 from '../images/smile1.png'
import smile2 from '../images/smile2.png'
import smile3 from '../images/smile3.png'
import smile4 from '../images/smile4.png'
import ellipse from '../images/Ellipse1.svg'
import ellipse2 from '../images/Ellipse2.svg'
import ellipse3 from '../images/Ellipse3.svg'

const Privileges = () => {
  return (
    <div className='privileges'>
      <Section>
        <DecorEllipse right={0} />
        <DecorEllipse left={0} bottom={'80px'} />
        <EllipseSmall left={"120px"} src={ellipse}/>
        <EllipseSmall right={"120px"} top={"-80px"}src={ellipse2}/>
        <EllipseSmall right={"120px"} bottom={"180px"} src={ellipse3}/>
        <Title>Что даст тебе обучение?</Title>
        <ContentWrapper>
          <Card 
              src={smile1} 
              text={'Откроешь свой первый криптокошелек и научишься с ним работать'}
            />
            <Card 
              src={smile3} 
              text={'Поймёшь, как выбирать правильные дропы'}
            />
            <Card 
              src={smile2} 
              text={'Построишь план по быстрому приумножению заработанных средств'}
            />
            <Card 
              src={smile4} 
              text={'Узнаешь кто такие холдеры и флипперы'}
            />
        </ContentWrapper>
      </Section>
    </div>
  )
}

export default Privileges
import React, { useEffect, useState, useRef } from 'react'
import { 
  Section,
  DecorEllipse,
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
  const [isMobile, setIsMobile] = useState(false);
  const ref = React.useRef();
  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};
    setIsMobile(clientWidth < 970 ? true : false);
  }
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return() => {
      window.removeEventListener("resize", resizeHandler)
    }
  })

  let bottomEllipseRight = isMobile ? "29px" : "120px";
  let bottomEllipseWidth = isMobile ? "62px" : "180px";
  let bottomEllipseBottom = isMobile ? "62px" : "180px";
  let violetEllipseTop = isMobile ? "-40px" : "-80px";
  let violetEllipseWidth = isMobile? "80px" : "151px";
  let blueEllipseWidth = isMobile? "21px" : "84px";
  let blueEllipseTop = isMobile? "136px" : "90px";
  let blueEllipseLeft = isMobile? "10px" : "200px";
  let paddingTop = isMobile? "2.2rem" : "6.2rem";


  return (
    <div className='privileges' ref={ref}>
      <Section paddingTop={paddingTop}>
        <DecorEllipse right={0} />
        <DecorEllipse left={0} bottom={'80px'} />
        <EllipseSmall left={blueEllipseLeft} top={blueEllipseTop}src={ellipse} width={blueEllipseWidth}/>
        <EllipseSmall right={"30px"} top={violetEllipseTop} src={ellipse2} width={violetEllipseWidth}/>
        <EllipseSmall right={bottomEllipseRight} bottom={bottomEllipseBottom} src={ellipse3} width={bottomEllipseWidth}/>
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
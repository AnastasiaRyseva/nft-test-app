import React, { useState } from 'react'
import logo from '../Logo_nft.svg';
import ManPicture from '../images/MAN.png'

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
    Image
  } from "../components"

const Home = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div>
    
      <Section>
      <DecorEllipse left={0} />
        <Header>
          <Logo src={logo} />
          <Menu active={menuActive} setActive={setMenuActive}/>
          <Burger onClick={() => setMenuActive(!menuActive)}
                  active={menuActive}
                  setActive={setMenuActive}
          />
        </Header>
      </Section>
      <Section>
        <Grid>
        <Cover 
            title="Не упусти<br/> возможность войти <br/> в прибыльную нишу"
            text='Получи все нужные навыки для заработка<br/> на NFT всего за 28 дней!'
        />
        <Image src={ManPicture} alt={'man'}/>
        </Grid>
      </Section>
    </div>
  )
}

export default Home
import React, { useEffect } from 'react';

import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import feed1 from './feedback1.png';
import feed2 from './feedback2.png';
import feed3 from './feedback3.png';

const Wrap = styled.div`
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
`;

const Child = styled.div`
  width: 30vw;
  height: 300px;
`;

const ChildInner = styled.div`
  width: 28vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapMob = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const ChildMob = styled.div`
  width: 100vw;
`;

const ChildInnerMob = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5vw;
`;

export const Feedbacks = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://prodoctorov.ru/static/js/widget_big.js?v7";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <BrowserView>
        <Wrap id="feedbacks">
          <Heading>Отзывы клиентов</Heading>
          <br />
          <div id="pd_widget_big" style={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} data-lpu="66736">
            <div id="pd_widget_big_content"></div>
            <a target="_blank" href="https://prodoctorov.ru/spb/lpu/66736-smart-klinik/#otzivi" target="_blank" class="pd_read_all">читать все отзывы</a>
            <span id="pd_powered_by">
              powered by <a target="_blank" href="https://prodoctorov.ru">
                <img class='pd_logo' src="https://prodoctorov.ru/static/logo_widget.png" />
              </a>
            </span>
            <div class="pd_rate_header">
              <a class="pd_rate_new" style={{ background: '#05e1cb' }} href="https://prodoctorov.ru/new/rate/lpu/66736/">Оставить отзыв</a>
            </div>
          </div>
        </Wrap>
      </BrowserView>
      <MobileView>
        <WrapMob id="feedbacks">
          <Heading>Отзывы клиентов</Heading>
          <br />
          <br />
          <br />
          <ChildMob>
            <ChildInnerMob>
              <img src={feed1} style={{ height: '100px', width: '100px', borderRadius: '50px', objectFit: 'cover' }} />
              <h3>Миронов В.А.</h3>
              <p>Обратился в клинику с грыжей, уже готовился на операцию, но решил все таки довериться и попытаться обойтись без нее. Лечение длилось 12 дней. Облегчение почувствовал уже после 3 дня . Через 2 месяца сделал повторное МРТ - грыжи нет. Что можно сказать ? Только большое и человеческое спасибо! Выражаю благодарность клинике , персоналу и моему врачу Ковзелеву П.Д.</p>
            </ChildInnerMob>
          </ChildMob>
          <ChildMob>
            <ChildInnerMob>
              <img src={feed2} style={{ height: '100px', width: '100px', borderRadius: '50px', objectFit: 'cover' }} />
              <h3>Мирошничук Ю.В.</h3>
              <p>О методе PRP мне было известно давно и собственно я пришла в основном из за него , но Федор Сергеевич убедил меня провести ещё лазер. В принципе я довольна результатом , так как знала на что шла , но приятно удивлена отношением персонала к своему делу и пациентам. Колено чувствует себя лучше , двигается легче , практически не болит. Спасибо.</p>
            </ChildInnerMob>
          </ChildMob>
          <ChildMob>
            <ChildInnerMob>
              <img src={feed3} style={{ height: '100px', width: '100px', borderRadius: '50px', objectFit: 'cover' }} />
              <h3>Кирсанова Т.А.</h3>
              <p>Новая клиника, чисто, красиво, хороший район! Я пришла просто на УЗИ, но мне понравилось все. Очень удобное расположение, добиралась на метро - реально 5 минут от метро.</p>
            </ChildInnerMob>
          </ChildMob>
        </WrapMob>
      </MobileView>
    </>
  );
};

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Footer from '../components/Footer';
import Content from '../components/layouts/Content';
import Section from '../components/layouts/Section';
import Separator from '../components/layouts/Separator';
import Navbar from '../components/Navbar';
import Title from '../components/text/Title';

import { space, layout } from 'styled-system';
import { co, flexcenter, flexcolumn, mq } from '../styles/theme';
import VideoPlayer from '../components/video/VideoPlayer';
import Accordion from '../components/Accordion';
import Text from '../components/text/Text';
import Button from '../components/Button';
import Image from '../components/Image';
import SegmentedText from '../components/SegmentedText';
import PoliglotLink from '../components/base/PoliglotLink';
import { pLink } from '../components/base/link';
import BaseCard from '../components/Card';
import StatusCard from '../components/StatusCard';
import SegmentedStatus from '../components/SegmentedStatus';
import SocialShare from '../components/SocialShare';
import { ReactComponent as call } from '../static/svg/call.svg';

const VideoWrapper = styled.div`
  ${layout};
  ${space};
`;

const AccordionItemWrapper = styled.div`
  ${flexcolumn}
  ${flexcenter}
`;

const CustomImage = styled(Image)`
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.3);
`;

const CallIcon = styled(call)`
  width: 100px;
  height: auto;
  fill: ${co.accentColor};
  ${layout}
  margin-bottom: 20px;
`;

const milestones = [
  {
    title: 'Propuesta sellada de recibida en la H. Cámara de Diputados',
    text:
      'En el día de reapertura de la Oficialía de Partes en la H. Cámara de Diputados, la propuesta fue sellada de recibida.',
    date: '14 de septiembre 2020',
  },
  {
    title: 'Carta sellada de recibida en la CNDH',
    text:
      'La carta dirigida a la Lic. María del Rosario Robles fue sellada de recibida en la Oficialía de Partes de la Dirección General de Quejas y Orientación, Oficina Centro Histórico, de la Comisión Nacional de Derechos Humanos',
    date: '11 agosto 2020',
  },
  {
    title: 'Propuesta enviada a Ciudad de México',
    text:
      'La propuesta firmada fue enviada por mensajería a la Ciudad de México para ser presentada ante la Oficialía de Partes de la H. Cámara de Diputados, al igual que a la CNDH.',
    date: 'julio/agosto 2020',
  },
  {
    title: 'Difusión de propuesta con legisladores federales',
    text:
      'Se envió la propuesta a diputados y diputadas federales de todos los partidos parlamentarios.',
    date: 'julio/agosto 2020',
  },
  {
    title: 'Creación de propuesta',
    text:
      'Se elaboró la propuesta y fue finalizada el 1 de julio del 2020. Durante este proceso estuvimos en contacto con Asociaciones y Movimientos del personal de la salud, quienes nos compartieron sus inquietudes y opiniones.',
    date: '1 de julio del 2020',
  },
];

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 300px;
  margin: 20px 0px;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Content type="landing">
        <Section type="landing">
          <VideoWrapper mx={{ _: 0 }} width={{ _: '100%' }}>
            <VideoPlayer
              teaser
              muted
              light={false}
              clean
              videoName="plan-de-pension"
              loop={1}
              config={{
                playerVars: {
                  start: 52,
                  modestbranding: 1,
                  showinfo: 0,
                  cc_load_policy: 1,
                },
              }}
              url={'https://youtu.be/N6F4nUyorcU'}
              styles={`
                ${mq.lg} {
                    // margin-top: 20px;
                }
            `}
            />
          </VideoWrapper>
          <SegmentedText
            style={{ marginTop: '20px' }}
            text={`
¡Hola! Somos un grupo jurídico que ha redactado y presentado ante la H. Cámara de Diputados del Congreso de la Unión, una **PROPUESTA TENDIENTE A PRESERVAR LA SALUD, LA VIDA Y EL BIENESTAR** del personal de la salud, que están al frente en la atención de la pandemia, al igual que sus familiares, quienes también corren el riesgo de ser infectados. 

Como ciudadanos, al igual que muchos otros mexicanos, estamos preocupados por la Pandemia COVID-19 que estamos padeciendo, siendo testigos del sufrimiento y peligro que corre el personal de salud que atiende a los contagiados de este terrible virus, pues es de todos conocido que son la primera línea de combate y que se encuentran desprotegidos al no contar con insumos suficientes, y de primera calidad, para enfrentar la batalla contra el COVID-19. 

Para la elaboración de la referida propuesta, estamos invocando la Constitución General de la República, los tratados internacionales firmados por México y ratificados por el Senado de la República, la Ley Federal del Trabajo y la Ley General de Salud, disposiciones jurídicas de las cuales se desprenden los derechos que las instituciones de la salud del Estado mexicano están violando en perjuicio del personal de la salud que atiende la pandemia.

De manera general, la propuesta busca:
1. Emitir un decreto ​para proteger el salario y demás ingresos de los trabajadores del sector salud.

2. Crear una protección económica para los dependientes del personal fallecido. 

3. Otorgar una póliza de seguros de gastos médicos mayores y de vida. 
Por último, que estas protecciones sean retroactivas a la fecha en que empezó la atención a la pandemia. 
            `}
            teaserTextSize={240}
            textType="small"
          />
        </Section>
        <Separator />
        <Section type="landing">
          <Title level={2}>Conoce la propuesta</Title>

          <Accordion
            lista={[
              {
                header: 'PROPUESTA POR EL BIEN DE LA PATRIA Y LA HUMANIDAD',
                body: (
                  <>
                    <CustomImage src="https://ssvmx.s3.us-east-2.amazonaws.com/doc2.png" />
                    <Text type="small" style={{ marginTop: '20px' }}>
                      La presente propuesta está dirigida a la H. Cámara de Diputados expresando las
                      violaciones a los derechos humanos del personal de la salud que atiende la
                      pandemia, al igual que los razonamientos jurídicos para fundamentar la queja y
                      los puntos petitorios.
                    </Text>
                    <Button
                      type="green"
                      link={
                        new pLink(
                          'https://ssvmx.s3.us-east-2.amazonaws.com/PROPUESTA+POR+EL+BIEN+DE+LA+PATRIA+Y+HUMANIDAD.pdf',
                          true,
                          false,
                        )
                      }
                    >
                      Ver documento
                    </Button>
                  </>
                ),
                customBody: true,
              },
              {
                header: 'CARTA DIRIGIDA A LA CNDH',
                body: (
                  <AccordionItemWrapper>
                    <CustomImage src="https://ssvmx.s3.us-east-2.amazonaws.com/doc1.png" />
                    <Text type="small" style={{ marginTop: '20px' }}>
                      También hemos presentado una carta dirigida a la Lic. María del Rosario Piedra
                      Ibarra, presidenta de la Comisión Nacional de los Derechos Humanos, en la cual
                      expresamos una queja, al igual que solicitud de investigación, de las
                      violaciones a los derechos humanos del personal de la salud que atiende la
                      pandemia del Sistema Nacional de Salud.
                    </Text>
                    <Button
                      type="green"
                      link={
                        new pLink(
                          'https://ssvmx.s3.us-east-2.amazonaws.com/Carta+a+CNDH.pdf',
                          true,
                          false,
                        )
                      }
                    >
                      Ver documento
                    </Button>
                  </AccordionItemWrapper>
                ),
                customBody: true,
              },
            ]}
          />
        </Section>
        <Separator />
        <Section type="landing">
          <Title level={2}>Estatus de la propuesta</Title>
          <SegmentedStatus milestones={milestones} numberShown={3} />
        </Section>
        <Separator />
        <Section type="landing">
          <Title level={2}>¿Cómo ayudar?</Title>
          <Text type="small">
            Los ciudadanos estaremos eternamente agradecidos al personal de salud que pone en riesgo
            su vida por protegernos. Ellos se han manifestado en diversas ocasiones y buscan ser
            escuchados y apoyados; y es por ello que hemos elaborado esta propuesta.
          </Text>
          <Text type="small">
            Los que suscribimos este documento, nos dirigimos a usted(es) para solicitar su
            SOLIDARIDAD con los trabajadores de la salud, quienes con motivo de la pandemia COVID-19
            han demostrado responsabilidad en el cumplimiento de su deber, a pesar de que diario
            ponen en riesgo su salud y vida, al igual que la de sus familias.
          </Text>
          <Title level={3}>Comparte la propuesta</Title>
          <Text type="small">
            Si te encuentras interesado en la propuesta puedes compartir con tu familia/amigos
            nuestra página de Change.org aquí.
          </Text>
          <StyledImage src="https://ssvmx.s3.us-east-2.amazonaws.com/Change.org_.png" />
          <SocialShare
            links={{
              facebook: '',
              twitter: '',
              whatsapp: '',
              linkedin: '',
              email: '',
            }}
          />
          <Title level={3} styles={{ marginTop: '40px' }}>
            Contacta a tu diputado
          </Title>
          <Text type="small">
            Si te encuentras interesado en la propuesta puedes compartir con tu familia/amigos
            nuestra página de Change.org aquí.
          </Text>
          <CallIcon />
          <Button type="green" link={new pLink('/contacto-diputado', false, true)}>
            Encuentra y contacta a tu diputado aquí
          </Button>
        </Section>
      </Content>
      <Footer />
    </>
  );
}

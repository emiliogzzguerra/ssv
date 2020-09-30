/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Markdown from 'react-remarkable';

import Footer from '../components/Footer';
import Content from '../components/layouts/Content';
import Section from '../components/layouts/Section';
import Separator from '../components/layouts/Separator';
import Navbar from '../components/Navbar';
import Title from '../components/text/Title';
import Text from '../components/text/Text';
import Swal from 'sweetalert2';
import { co } from '../styles/theme';
import { Mixpanel } from '../components/mixpanel';

const step_images = [
  'https://ssvmx.s3.us-east-2.amazonaws.com/step1.png',
  'https://ssvmx.s3.us-east-2.amazonaws.com/step2.png',
  'https://ssvmx.s3.us-east-2.amazonaws.com/step3.png',
  'https://ssvmx.s3.us-east-2.amazonaws.com/step4.png',
];

const fireImagePopUp = (number) => {
  Swal.fire({
    html: `<img style="width: 100%; height: auto;" src="${step_images[number - 1]}"/>`,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
  });
};

export default function ContactoDiputado() {
  useEffect(() => {
    Mixpanel.track('New visitor');
  }, []);
  return (
    <>
      <Navbar />
      <Content type="landing">
        <Section type="landing">
          <Title level={2} styles={{ marginTop: '20px' }}>
            ¿Por qué contactar a tu diputado / diputada?
          </Title>
          <Text type="small">
            Los diputados federales son nuestros representantes en la Cámara de Diputados, todos
            tenemos el derecho de comunicarnos con ellos para informarles nuestro interés en un tema
            o propuesta.
          </Text>
        </Section>
        <Separator />
        <Section type="landing">
          <Title level={3}>Pasos para encontrar y contactar a mi diputado</Title>
          <Text type="body">
            <b>1.</b> Ingresa a{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href="http://sitl.diputados.gob.mx/LXIV_leg/info_diputados.php"
            >
              este link
            </a>{' '}
            <a
              onClick={() => {
                fireImagePopUp(1);
              }}
              style={{ color: co.secondaryColor, textDecoration: 'underline' }}
            >
              aquí una imágen de ejemplo
            </a>
          </Text>
          <Text type="body">
            <b>2.</b> Dentro de la página encontrarás los distintos partidos políticos{' '}
            <a
              onClick={() => {
                fireImagePopUp(2);
              }}
              style={{ color: co.secondaryColor, textDecoration: 'underline' }}
            >
              aquí una imágen de ejemplo
            </a>
          </Text>
          <Text type="body">
            <b>3.</b> Al ingresar a cada uno podrás encontrar una lista de los diputados y diputadas
            por estado.{' '}
            <a
              onClick={() => {
                fireImagePopUp(3);
              }}
              style={{ color: co.secondaryColor, textDecoration: 'underline' }}
            >
              aquí una imágen de ejemplo
            </a>
          </Text>
          <Text type="body">
            <b>4.</b> Busca tu estado y selecciona el nombre del diputado a diputada.{' '}
          </Text>
          <Text type="body">
            <b>5.</b> Al seleccionar un diputado o diputada encontrarás su semblanza.{' '}
          </Text>
          <Text type="body">
            <b>6.</b> Ahí podrás encontrar un correo electrónico para contactarte con el/ella.{' '}
            <a
              onClick={() => {
                fireImagePopUp(4);
              }}
              style={{ color: co.secondaryColor, textDecoration: 'underline' }}
            >
              aquí una imágen de ejemplo
            </a>
          </Text>
        </Section>
        <Separator />
        <Section>
          <Title level={3} style={{ marginTop: '20px' }}>
            Correo de ejemplo
          </Title>
          <Text type="small">
            <Markdown>
              {`
Buen día XX (nombre de diputado o diputada), 

Mi nombre es XX (tu nombre) y usted es mi representante en la H. Cámara de Diputados. Le escribo este correo para expresarle mi preocupación por los trabajadores de la salud que atienden la pandemia, al igual que mi interés en la propuesta ciudadana “PROPUESTA PARA GARANTIZAR LOS DERECHOS HUMANOS A LA VIDA Y LA SALUD DE LOS TRABAJADORES, Y SUS DEPENDIENTES ECONÓMICOS, DEL SECTOR SALUD, A NIVEL NACIONAL, DURANTE LA RELACIÓN DE TRABAJO QUE SE DESARROLLE EN LA ATENCIÓN DE LA PANDEMIA COVID-19”. 

Me sumo y solidarizo con quienes nos están protegiendo durante la pandemia. Espero que esta propuesta pueda ser tomada en cuenta por usted y por otros diputados y diputadas. 

Agradezco me pueda informar sobre acciones que se estén tomando en beneficio de los trabajadores de la salud que atienden la pandemia. 

Saludos. 
XX (tu nombre)
              `}
            </Markdown>
          </Text>
        </Section>
      </Content>
      <Footer />
    </>
  );
}

import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';

import SectionWrapper, { SectionHeader, ServiceWrapper } from './service.style';
// import data from 'common/src/data/AgencyModern';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        services {
          id
          title
          description
          thumbnail_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper id="services">
      <Container width="1260px">
        <Fade up delay={100}>
          <SectionHeader>
            <Heading content="Business start with great features" />
            <Text content="Build an incredible workplace and grow your business with all-in-one platform with amazing contents." />
          </SectionHeader>
        </Fade>
        <ServiceWrapper>
          {data.agencyModernJson.services.map((item, index) => {
            return (
              <Fade up delay={130 * item.id} key={`service-key-${item.id}`}>
                <FeatureBlock
                  key={`post_key-${index}`}
                  id={`post_id-${item.id}`}
                  className="service__item"
                  icon={
                    <Image
                      fluid={
                        (item.thumbnail_url !== null) | undefined
                          ? item.thumbnail_url.childImageSharp.fluid
                          : {}
                      }
                      src={item.thumbnail_url.childImageSharp.fluid.src}
                      alt={`Blog Image ${item.id}`}
                      objectFit="cover"
                      className="service__image"
                    />
                  }
                  iconPosition="left"
                  title={<Heading as="h4" content={item.title} />}
                  description={<Text content={item.description} />}
                />
              </Fade>
            );
          })}
        </ServiceWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Services;

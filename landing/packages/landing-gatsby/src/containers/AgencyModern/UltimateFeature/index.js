import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Link from 'common/src/components/Link';
import Heading from 'common/src/components/Heading';
import SectionWrapper, {
  SectionTitle,
  FeatureWrapper,
} from './ultimateFeature.style';

const UltimateFeature = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        ultimateFeatures {
          id
          title
          desc
          learnMoreLink
          icon {
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
  const features = Data.agencyModernJson.ultimateFeatures;
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionTitle>
          <Heading content="Ultimate features you must appreciate" />
          <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred." />
        </SectionTitle>

        <FeatureWrapper>
          {features.map((feature, index) => (
            <Fade up delay={100 * feature.id} key={index}>
              <FeatureBlock
                icon={
                  <Image
                    fluid={
                      (feature.icon !== null) | undefined
                        ? feature.icon.childImageSharp.fluid
                        : {}
                    }
                    src={feature.icon.childImageSharp.fluid.src}
                    alt={`Feature Image ${feature.id}`}
                    objectFit="cover"
                    className="service__image"
                  />
                }
                title={<Heading as="h4" content={feature.title} />}
                description={
                  <React.Fragment>
                    <Text content={feature.desc} />
                    <Link
                      href={feature.learnMoreLink ?? feature.learnMoreLink}
                      className="learn__more"
                    >
                      Learn More <Icon icon={chevronRight} />
                    </Link>
                  </React.Fragment>
                }
                className="ultimateFeature"
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

UltimateFeature.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

UltimateFeature.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
};

export default UltimateFeature;

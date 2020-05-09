import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import SectionWrapper, { ContentWrapper } from './features.style';
import feature from 'common/src/assets/image/agencyModern/features/feature.png';
import WowEmoji from 'common/src/assets/image/agencyModern/features/emoji-wow.png';
import data from 'common/src/data/AgencyModern';

const Features = () => {
  return (
    <SectionWrapper id="feature">
      <Container>
        <ContentWrapper>
          <Fade left delay={100}>
            <div className="image">
              <Image src={feature} alt="Feature Image" />
            </div>
          </Fade>
          <Fade right delay={200}>
            <div className="content">
              <Heading content="Meet our exciting features that make you wow" />
              <Text content="Build an incredible workplace and grow your business with all-in-one platform with amazing contents." />
              <Accordion>
                <Fragment>
                  {data.accordion.map((item, index) => (
                    <AccordionItem key={index}>
                      <Fragment>
                        <AccordionTitle>
                          <Fragment>
                            <Heading as="h4" content={item.title} />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={thinRight} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={thinDown} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </Fragment>
                        </AccordionTitle>
                        <AccordionBody>
                          <Text content={item.description} />
                        </AccordionBody>
                      </Fragment>
                    </AccordionItem>
                  ))}
                </Fragment>
              </Accordion>
            </div>
          </Fade>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;

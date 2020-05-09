import React from 'react';
import { Icon } from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Link from 'common/src/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './customer.style';
import illustration from 'common/src/assets/image/agencyModern/customer.png';

const Customer = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <Fade left delay={100}>
              <Image src={illustration} alt="Illustration" />
            </Fade>
          </Illustration>
          <Content>
            <Fade right delay={100}>
              <Heading
                as="h2"
                content="We have more than thousand of worldwide happy customer"
              />
              <Text content="Coworking offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities." />
              <Link className="explore" href="#">
                Explore more <Icon icon={chevronRight} />
              </Link>
            </Fade>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;

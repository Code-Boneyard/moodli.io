import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/src/components/UI/Container';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Image from 'common/src/components/Image';

import SectionWrapper, { SectionHeading, NewsWrapper } from './news.style';

import data from 'common/src/data/AgencyModern';
import comment from 'common/src/assets/image/agencyModern/comment.png';

const News = () => {
  return (
    <SectionWrapper id="news">
      <Container>
        <Fade up delay={100}>
          <SectionHeading>
            <Heading as="h2" content="Popular blog post we update everyday" />
            <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click." />
          </SectionHeading>
        </Fade>
        <NewsWrapper>
          {data.posts.map(post => (
            <Fade up delay={100 * post.id} key={`news-${post.id}`}>
              <BlogPost
                thumbUrl={post.icon}
                title={post.title}
                link={
                  <React.Fragment>
                    <Image src={comment} alt="comment" /> {post.comments_count}{' '}
                    comments
                  </React.Fragment>
                }
              />
            </Fade>
          ))}
        </NewsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;

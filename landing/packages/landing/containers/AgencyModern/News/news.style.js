import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from 'styled-system';

const SectionWrapper = styled.section`
  padding: 60px 0 75px;
`;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 50px;
    letter-spacing: -0.5px;
    @media screen and (max-width: 480px) {
      line-height: 40px;
    }
  }
  p {
    font-size: 15px;
    line-height: 35px;
    color: ${themeGet('colors.headingColor')};
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .react-reveal {
    width: calc((100% / 3) - 15px);
    margin: 50px 0 0 0;
    @media screen and (max-width: 991px) {
      width: calc((100% / 2) - 15px);
    }
    @media screen and (max-width: 570px) {
      width: 100%;
    }
  }
  .blog_post {
    h3 {
      font-size: 20px;
      line-height: 30px;
      margin-top: 16px;
    }
    .learn_more {
      display: flex;
      margin: 0;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      color: ${rgba('#343D48', 0.8)};
      img {
        margin-right: 8px;
      }
    }
  }
  .thumbnail {
    display: flex;
    img {
      max-width: 100%;
    }
  }
`;

export default SectionWrapper;

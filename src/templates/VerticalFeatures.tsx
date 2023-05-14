/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section
      title=""
      description={
        <>
          Discover the magical island of Mauritius like never before.{' '}
          <Link href="https://morisguide.com">
            <a className="text-primary-500">MorisGuide.com</a>
          </Link>{' '}
          is a comprehensive, online platform dedicated to helping you explore
          and experience the best of Mauritius, whether you're a resident, a
          tourist, or an investor.
        </>
      }
    >
      <VerticalFeatureRow
        title="For the General Public"
        description={
          <>
            Planning your next adventure? Our platform provides detailed,
            curated guides to Mauritius' stunning beaches, fascinating cultural
            landmarks, world-class restaurants, and exciting outdoor activities.
            We make it easy to discover what Mauritius has to offer and plan
            your perfect trip.
          </>
        }
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="For the Government"
        description={
          <>
            <Link href="https://morisguide.com">
              <a className="text-primary-500">MorisGuide.com</a>
            </Link>{' '}
            is committed to boosting tourism and showcasing the unique cultural
            heritage of Mauritius to the world. By partnering with us, you can
            enhance the visibility of local attractions, events, and
            initiatives, driving economic growth and fostering a sense of
            national pride.
          </>
        }
        image="/assets/images/feature3.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="For Investors"
        description={
          <>
            Mauritius is a vibrant, thriving market, and{' '}
            <Link href="https://morisguide.com">
              <a className="text-primary-500">MorisGuide.com</a>
            </Link>{' '}
            is at the forefront of its digital tourism landscape. By investing
            in{' '}
            <Link href="https://morisguide.com">
              <a className="text-primary-500">MorisGuide.com</a>
            </Link>
            , you'll be tapping into a growth market and helping to shape the
            future of travel and tourism in Mauritius.
          </>
        }
        image="/assets/images/feature2.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
    <Section
      title=""
      description={
        <>
          Join us as we explore Mauritius, the jewel of the Indian Ocean, and
          create unforgettable experiences. Get in touch with us today to learn
          more about{' '}
          <Link href="https://morisguide.com">
            <a className="text-primary-500">MorisGuide.com</a>
          </Link>{' '}
          and how we can collaborate.
        </>
      }
    >
      <div></div>
    </Section>
  </>
);

export { VerticalFeatures };

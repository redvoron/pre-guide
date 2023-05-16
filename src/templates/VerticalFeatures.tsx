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
          We are not just a comprehensive, user-friendly platform for
          discovering the magical island of Mauritius. We are a stepping stone,
          a launch pad for a bigger vision - to become the leading search
          company for the entire African continent, providing a range of diverse
          internet services tailored to the unique needs and experiences of this
          vibrant and diverse region. We understand the African digital
          landscape, its potentials, and its challenges. Unlike global companies
          like Google or Microsoft, our advantage lies in our focused commitment
          to this region. Our products and services are designed with an
          in-depth understanding of the local cultures, languages, and
          preferences.
          <br />
          <h2 className="text-3xl text-primary-500 p-3">Why Mauritius?</h2>{' '}
          Mauritius, known for its strategic location, political stability, and
          growing IT infrastructure, is the perfect place for our operations.
          Establishing our mother company here in Mauritius not only opens up
          opportunities for us but also for the country. Here's how:
        </>
      }
    >
      <VerticalFeatureRow
        title="Economic Growth"
        description={
          <>
            Our operations will contribute to the Mauritian economy by creating
            jobs and generating revenue. As our services expand across Africa,
            Mauritius will be at the center of this growth.
          </>
        }
        image="/assets/images/feature2.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Digital Hub"
        description={
          <>
            Our presence will enhance Mauritius's reputation as a digital hub,
            attracting more tech companies and investments.
          </>
        }
        image="/assets/images/feature3.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Knowledge Transfer"
        description={
          <>
            Our team of international experts will work closely with local
            talent, fostering a culture of innovation and knowledge exchange.
          </>
        }
        image="/assets/images/feature.svg"
        imageAlt="Third feature alt text"
      />
      <VerticalFeatureRow
        title="Tourism Boost"
        description={
          <>
            Through{' '}
            <Link href="https://morisguide.com">
              <a className="text-primary-500">MorisGuide.com</a>
            </Link>
            , we will showcase Mauritius to the world, boosting tourism, and
            promoting local businesses.
          </>
        }
        image="/assets/images/feature2.svg"
        imageAlt="Fourth feature alt text"
        reverse
      />
    </Section>
    <Section
      title=""
      description={
        <>
          We invite the community, the stakeholders, and all who believe in our
          vision to join us on this exciting journey. Our aim is not just to
          build a successful business but to create a digital revolution that
          will resonate across Mauritius and the whole of Africa.
          <br />
          <br />
          At{' '}
          <Link href="https://morisguide.com">
            <a className="text-primary-500">MorisGuide.com</a>
          </Link>
          , we believe in the power of collaboration and community. We are
          committed to building strong, trustworthy relationships with our
          partners, including regulatory authorities, to ensure our operations
          are transparent, ethical, and beneficial to all.
          <br />
          <br />
          This is not just our project; it's Mauritius's project. It's Africa's
          project. Let's create this digital future together.
        </>
      }
    >
      <div></div>
    </Section>
  </>
);

export { VerticalFeatures };

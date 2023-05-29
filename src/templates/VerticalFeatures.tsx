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
          vibrant and diverse region. <br />
          <br />
          We understand the African digital landscape, its potentials, and its
          challenges. Unlike global companies like Google or Microsoft, our
          advantage lies in our focused commitment to this region. Our products
          and services are designed with an in-depth understanding of the local
          cultures, languages, and preferences. <br />
          <br />
          <b>Why Mauritius?</b>
          <br /> Mauritius, known for its strategic location, political
          stability, and growing IT infrastructure, is the perfect place for our
          operations. Establishing our mother company here in Mauritius not only
          opens up opportunities for us but also for the country. Here's how:
          <br />
          <br />
          <b>Economic Growth:</b> Our operations will contribute to the
          Mauritian economy by creating jobs and generating revenue. As our
          services expand across Africa, Mauritius will be at the center of this
          growth.
          <br />
          <br />
          <b>Digital Hub: </b>Our presence will enhance Mauritius's reputation
          as a digital hub, attracting more tech companies and investments.{' '}
          <br />
          <br />
          <b>Knowledge Transfer:</b> Our team of international experts will work
          closely with local talent, fostering a culture of innovation and
          knowledge exchange. <br />
          <br />
          <b>Tourism Boost:</b> Through{' '}
          <Link href="https://morisguide.com">
            <a className="text-primary-500">MorisGuide.com</a>
          </Link>
          , we will showcase Mauritius to the world, boosting tourism, and
          promoting local businesses. <br />
          <br />
          We invite the community, the stakeholders, and all who believe in our
          vision to join us on this exciting journey. Our aim is not just to
          build a successful business but to create a digital revolution that
          will resonate across Mauritius and the whole of Africa. <br />
          <br />
          At{' '}
          <Link href="https://morisguide.com">
            <a className="text-primary-500">MorisGuide.com</a>
          </Link>
          , we believe in the power of collaboration and community. We are
          committed to building strong, trustworthy relationships with our
          partners, including regulatory authorities, to ensure our operations
          are transparent, ethical, and beneficial to all. <br />
          <br />
          This is not just our project; it's Mauritius's project. It's Africa's
          project. Let's create this digital future together.
          <br />
          <br />
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
        image="/assets/images/Picture2.png"
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
        image="/assets/images/Picture7.png"
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
        image="/assets/images/Picture3.png"
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

import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background
    color="bg-gray-100"
    style={{
      backgroundImage: 'url(../assets/images/newbg.png)',
      bacgromgPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Welcome to{' '}
            <Link href="https://morisguide.com">
              <a className="text-primary-500">Moris Guide</a>
            </Link>
          </>
        }
        description="Your Gateway to Mauritius and Beyond!"
        /*         button={
          <Link href="#">
            <a>
              <Button xl>Click me to buy</Button>
            </a>
          </Link>
        } */
      />
    </Section>
  </Background>
);

export { Hero };

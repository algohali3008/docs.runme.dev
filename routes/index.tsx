import { HowItWorks, OpenSource, CLI, FinalCta } from '../components/Sections.tsx';
import { Hero } from '../components/Hero.tsx'
import Layout, { PageWrapper } from '../components/Layout.tsx'

import ServiceTabs from "../islands/ServiceTabs.tsx";

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <div class='relative overflow-x-hidden mb-24'>
        <Hero />
        <HowItWorks />
        <OpenSource />
        <PageWrapper>
          <CLI />
          <ServiceTabs />
        </PageWrapper>
        <FinalCta />
      </div>
    </Layout>
  );
}

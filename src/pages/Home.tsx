import PageWrapper from '../components/PageWrapper';
import ProfileSection from '../components/ProfileSection';
import InnerHeading from '../components/InnerHeading';
import WorkSection from '../components/WorkSection';

export default function Home() {
  return (
    <PageWrapper>
      <ProfileSection />
      <InnerHeading text="My work" />
      <WorkSection />
    </PageWrapper>
  );
}
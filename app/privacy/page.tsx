import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { PrivacyEnglish, PrivacyTurkish } from './content';

export const metadata = {
  title: 'Privacy Policy | GetMeCoach',
  description: 'GetMeCoach privacy policy and personal data protection information.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      englishTitle="Privacy Policy"
      turkishTitle="Gizlilik Politikası"
      englishContent={<PrivacyEnglish />}
      turkishContent={<PrivacyTurkish />}
    />
  );
}

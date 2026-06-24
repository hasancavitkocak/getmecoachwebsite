import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { PrivacyTurkish } from '../privacy/content';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | GetMeCoach',
  description: 'GetMeCoach gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      turkishTitle="Gizlilik Politikası"
      turkishContent={<PrivacyTurkish />}
      defaultLang="tr"
    />
  );
}


import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { TermsTurkish } from '../terms/content';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | GetMeCoach',
  description: 'GetMeCoach kullanım koşulları ve hizmet şartları.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      turkishTitle="Kullanım Koşulları"
      turkishContent={<TermsTurkish />}
      defaultLang="tr"
    />
  );
}


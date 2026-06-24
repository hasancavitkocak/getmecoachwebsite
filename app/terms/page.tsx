import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { TermsEnglish, TermsTurkish } from './content';

export const metadata = {
  title: 'Terms of Service | GetMeCoach',
  description: 'GetMeCoach terms of service and usage conditions.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      englishTitle="Terms of Service"
      turkishTitle="Kullanım Koşulları"
      englishContent={<TermsEnglish />}
      turkishContent={<TermsTurkish />}
    />
  );
}

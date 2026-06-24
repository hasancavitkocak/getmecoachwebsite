import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { SupportEnglish, SupportTurkish } from './content';

export const metadata = {
  title: 'Support | GetMeCoach',
  description: 'GetMeCoach support and help center.',
};

export default function SupportPage() {
  return (
    <LegalPageLayout
      englishTitle="Support & Help"
      turkishTitle="Destek & Yardım"
      englishContent={<SupportEnglish />}
      turkishContent={<SupportTurkish />}
    />
  );
}

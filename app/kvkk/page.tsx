import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { KVKKEnglish, KVKKTurkish } from './content';

export const metadata = {
  title: 'KVKK Disclosure | GetMeCoach',
  description: 'GetMeCoach KVKK disclosure text and personal data protection information.',
};

export default function KVKKPage() {
  return (
    <LegalPageLayout
      englishTitle="KVKK Disclosure Text"
      turkishTitle="KVKK Aydınlatma Metni"
      englishContent={<KVKKEnglish />}
      turkishContent={<KVKKTurkish />}
    />
  );
}

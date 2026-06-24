import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { AccountDeletionEnglish, AccountDeletionTurkish } from './content';

export const metadata = {
  title: 'Account Deletion | GetMeCoach',
  description: 'Request account and data deletion from GetMeCoach.',
};

export default function AccountDeletionPage() {
  return (
    <LegalPageLayout
      englishTitle="Account & Data Deletion"
      turkishTitle="Hesap & Veri Silme"
      englishContent={<AccountDeletionEnglish />}
      turkishContent={<AccountDeletionTurkish />}
    />
  );
}

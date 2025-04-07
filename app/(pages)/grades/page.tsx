import { Container } from '@mui/material';
import { CreateForm } from '@/app/(pages)/grades/components/CreateFrom';
import { GradesTable } from '@/app/(pages)/grades/components/GradesTable';
import { getViewType } from '@/app/(pages)/grades/utils/getViewType';

interface GradesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GradesPage({ searchParams }: GradesPageProps) {
  const viewType = await getViewType(searchParams);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <CreateForm />
      <GradesTable viewType={viewType} />
    </Container>
  );
}

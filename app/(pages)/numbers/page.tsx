import { Container } from '@mui/material';
import { CreateForm } from '@/app/(pages)/numbers/components/CreateFrom';
import { SummaryTable } from '@/app/(pages)/numbers/components/SummaryTable';

export default function NumbersPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <CreateForm />
      <SummaryTable />
    </Container>
  );
}

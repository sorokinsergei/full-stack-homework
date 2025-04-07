'use client';

import { Button, FormControl, TextField, Box, CircularProgress, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { handleRefreshSumsTable } from '@/app/(pages)/numbers/actions';
import { CreateFormData } from '@/app/(pages)/numbers/components/CreateFrom/type';

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateFormData>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: CreateFormData) => {
    try {
      const res = await fetch('/api/numbers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errBody = await res.json();
        throw new Error(errBody?.message || 'Failed to create number entry.');
      }

      reset();
      await handleRefreshSumsTable();
    } catch (error: any) {
      console.error('[CreateForm] Submission error:', error);
      setError(error?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'row', gap: 2, paddingBottom: 3 }}
      >
        <FormControl error={!!errors.value}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            placeholder="Enter number"
            {...register('value', {
              required: 'This field is required',
              valueAsNumber: true,
              validate: (value) => Number.isInteger(value) || 'Please enter a valid integer',
            })}
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.value}
            helperText={errors.value?.message}
          />
        </FormControl>

        <Button
          loading={isSubmitting}
          loadingIndicator={<CircularProgress size={20} />}
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          Create
        </Button>
      </Box>
      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={() => setError(null)}
        message={error}
      />
    </>
  );
}

'use client';

import {
  Button,
  FormControl,
  TextField,
  Box,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem,
  capitalize,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { handleRefreshGradesTable } from '@/app/(pages)/grades/actions';
import { GradeTypeEnum } from '@/db/modules/grade/constants';

interface CreateFormData {
  class: GradeTypeEnum;
  grade: number;
}

export default function CreateForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateFormData>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: CreateFormData) => {
    try {
      const res = await fetch('/api/grades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grade: data.grade, class: data.class }),
      });

      if (!res.ok) {
        const errBody = await res.json();
        throw new Error(errBody?.message || 'Failed to create grade entry.');
      }

      reset();
      await handleRefreshGradesTable();
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
        <FormControl sx={{ minWidth: 200 }} error={!!errors.class}>
          <InputLabel id="class-name-label">Class name</InputLabel>
          <Controller
            name="class"
            control={control}
            rules={{ required: 'Class is required' }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="class-name-label"
                id="class-name"
                label="Class name"
                value={field.value ?? ''}
              >
                {Object.values(GradeTypeEnum).map((type) => (
                  <MenuItem key={type} value={type}>
                    {capitalize(type)}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.class && (
            <Box sx={{ color: 'error.main', fontSize: '0.75rem', mt: 0.5 }}>
              {errors.class.message}
            </Box>
          )}
        </FormControl>
        <FormControl error={!!errors.grade}>
          <TextField
            id="grade"
            variant="outlined"
            label="Grade"
            type="number"
            {...register('grade', {
              required: 'Grade is required',
              valueAsNumber: true,
              min: { value: 0, message: 'Must be between 0 and 100' },
              max: { value: 100, message: 'Must be between 0 and 100' },
              validate: (value) => Number.isInteger(value) || 'Please enter a valid integer',
            })}
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.grade}
            helperText={errors.grade?.message}
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

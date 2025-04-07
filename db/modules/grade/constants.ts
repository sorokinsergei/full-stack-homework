export enum GradeTypeEnum {
  MATH = 'math',
  SCIENCE = 'science',
  HISTORY = 'history',
}

export enum AverageTypeEnum {
  CLASS_AVERAGES = 'class_averages', // - "Class Averages" - Calculates and displays average grade per class
  PASSING_AVERAGE = 'passing_average', // - "Passing Average" - Shows class averages for grades > 55
  HIGH_PERFORM_CLASS = 'high_perform_class', // - "High Performing Classes" - Lists classes with averages > 70
}

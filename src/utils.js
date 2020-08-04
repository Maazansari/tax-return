export const getTaxableIncomeFor1099 = (formValues) => {
  const totalIncome = formValues["total_income"];
  const totalBusinessExpenses = formValues["total_business_expenses"];
  const totalMilesTraveled = formValues["total_miles_expenses"];
  let taxableIncome =
    totalIncome - totalBusinessExpenses - 2.1 * totalMilesTraveled;

  if (taxableIncome >= 0 && taxableIncome < 10000) {
    return taxableIncome;
  } else if (taxableIncome >= 10000 && taxableIncome < 50000) {
    return taxableIncome - 10000;
  } else if (taxableIncome > 50000) {
    return taxableIncome * 0.99;
  }
  return taxableIncome;
};

export const getTaxableIncomeForW2 = (earnings) => {
  if (earnings >= 0 && earnings < 10000) {
    return earnings;
  } else if (earnings >= 10000 && earnings < 50000) {
    return earnings - 10000;
  } else if (earnings > 50000) {
    return earnings * 0.98;
  }
  return earnings;
};

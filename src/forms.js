const forms = [
  {
    name: "Form 1099",
    formFields: [
      {
        label: "Total Income",
        name: "total_income",
        type: "number",
      },
      {
        label: "Total Business Expenses",
        name: "total_business_expenses",
        type: "number",
      },
      {
        label: "Total Miles Driven",
        name: "total_miles_expenses",
        type: "number",
      },
    ],
  },

  {
    name: "Form W-2",
    formFields: [
      {
        label: "Total Income",
        name: "total_income",
        type: "number",
      },
      {
        label: "Total Taxes Paid",
        name: "total_taxes_paid",
        type: "number",
      },
    ],
  },
];

export default forms;

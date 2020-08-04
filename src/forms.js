const forms = [
  {
    name: "Form 1099",
    formFields: [
      {
        label: "Total Income",
        name: "total-income",
        type: "number",
      },
      {
        label: "Total Business Expenses",
        name: "total-business-expenses",
        type: "number",
      },
      {
        label: "Total Miles Driven",
        name: "total-miles-expenses",
        type: "number",
      },
    ],
  },

  {
    name: "Form W-2",
    formFields: [
      {
        label: "Total Income",
        name: "total-income",
        type: "number",
      },
      {
        label: "Total Taxes Paid",
        name: "total-taxes-paid",
        type: "number",
      },
    ],
  },
];

export default forms;

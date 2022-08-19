export const progressSpinnerArgtypes = {
  color: {
    description: 'Theme color palette',
    control: 'select',
    defaultValue: 'primary',
    table: {
      defaultValue: { summary: 'primary' },
    },
    options: [
      'primary',
      'accent',
      'warn',
    ]
  },
  diameter: {
    description: 'The diameter of the progress spinner (will set width and height of svg)',
    defaultValue: 100,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 100 },
    },
    control: {
      type: 'number'
    }
  },
  mode: {
    description: 'Mode of the progress circle',
    control: 'select',
    defaultValue: 'indeterminate',
    table: {
      defaultValue: { summary: 'indeterminate' },
    },
    options: [
      'determinate',
      'indeterminate',
      'buffer',
      'query'
    ]
  },
  strokeWidth: {
    description: 'Stroke width of the progress spinner',
    defaultValue: 5,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 5 },
    },
    control: {
      type: 'number'
    }
  },
  value: {
    description: 'Value of the progress circle',
    defaultValue: 70,
    table: {
      type: { summary: 'range' },
      defaultValue: { summary: 70 },
    },
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1
    }
  }
}

export const progressSpinnerArgtypes = {
  color: {
    description: 'Theme color palette',
    control: 'select',
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
    type: { name: 'range' },
    table: {
      type: { summary: 70 },
    },
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1
    }
  }
}

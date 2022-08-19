export const progressBarArgtypes = {
  bufferValue: {
    description: 'Buffer value of the progress bar',
    defaultValue: 0,
    table: {
      type: { summary: 'range' },
      defaultValue: { summary: 0 },
    },
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1
    }
  },
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
  mode: {
    description: 'Mode of the progress bar',
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
  value: {
    description: 'Value of the progress bar',
    defaultValue: 0,
    table: {
      type: { summary: 'range' },
      defaultValue: { summary: 0 },
    },
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1
    }
  }
}

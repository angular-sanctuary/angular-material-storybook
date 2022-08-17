export const badgeArgtypes = {
  matBadge: {
    description: 'The content for the badge',
    defaultValue: '3',
    table: {
      type: { summary: 'text' },
      defaultValue: { summary: '3' },
    },
    control: {
      type: 'text'
    }
  },
  matBadgeDescription: {
    description: 'Message used to describe the decorated element via aria-describedby',
    defaultValue: '',
    control: {
      type: 'text'
    }
  },
  matBadgeDisabled: {
    description: 'Whether the component is disabled',
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: {
      type: 'boolean'
    }
  },
  matBadgeHidden: {
    description: 'Whether the badge is hidden',
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: {
      type: 'boolean'
    }
  },
  matBadgeOverlap: {
    description: 'Whether the badge should overlap its contents or not',
    defaultValue: true,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
    },
    control: {
      type: 'boolean'
    }
  },
  matBadgePosition: {
    description: 'Position the badge should reside',
    control: 'select',
    defaultValue: 'above after',
    table: {
      defaultValue: { summary: 'above after' },
    },
    options: [
      'before',
      'after',
      'above',
      'below',
      'above after',
      'above before',
      'below before',
      'below after',
    ]
  },
  matBadgeSize: {
    description: 'Size of the badge',
    defaultValue: 'medium',
    table: {
      defaultValue: { summary: 'medium' },
    },
    control: 'select',
    options: [
      'small',
      'medium',
      'large'
    ]
  }
}

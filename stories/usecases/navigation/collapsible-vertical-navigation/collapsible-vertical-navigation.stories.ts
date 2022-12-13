import { Meta, StoryObj } from '@storybook/angular';
import { defaultUsecasesParameters } from '../../../../.storybook/utils';
import { CollapsibleVerticalNavigationComponent } from './collapsible-vertical-navigation.component';

export default {
  title: 'Usecases/Navigation',
  component: CollapsibleVerticalNavigationComponent,
  parameters: {
    ...defaultUsecasesParameters,
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

export const CollapsibleVerticalNavigation: StoryObj<CollapsibleVerticalNavigationComponent> = {
  render: (args) => ({
    props: args,
  }),
  name: 'collapsible vertical navigation',
};

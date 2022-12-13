import { Meta, StoryObj } from '@storybook/angular';
import { FabBottomNavigationComponent } from './fab-bottom-navigation.component';
import { defaultUsecasesParameters } from '../../../../.storybook/utils';

export default {
  title: 'Usecases/Navigation',
  component: FabBottomNavigationComponent,
  parameters: {
    ...defaultUsecasesParameters,
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

export const Template: StoryObj<FabBottomNavigationComponent> = {
  render: (args) => ({
    props: args,
  }),
  name: 'bottom navigation 1',
};

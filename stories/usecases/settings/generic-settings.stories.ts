import { Meta, StoryObj } from '@storybook/angular';
import { GenericSettingsComponent } from './generic-settings.component';
import { defaultUsecasesParameters } from '../../../.storybook/utils';

export default {
  title: 'usecases/Settings',
  component: GenericSettingsComponent,
  parameters: {
    ...defaultUsecasesParameters,
  },
} as Meta;

export const Generic: StoryObj<GenericSettingsComponent> = {
  render: (args) => ({
    props: args,
  }),
  name: 'generic',
};

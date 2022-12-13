import { Meta, StoryObj } from '@storybook/angular';
import { WifiSettingsComponent } from './wifi-settings.component';
import { defaultUsecasesParameters } from '../../../.storybook/utils';

export default {
  title: 'usecases/Settings',
  component: WifiSettingsComponent,
  parameters: {
    ...defaultUsecasesParameters,
  },
} as Meta;

export const Wifi: StoryObj<WifiSettingsComponent> = {
  render: (args) => ({
    props: args,
  }),
  name: 'Wi-Fi',
};

import {Meta, Story} from "@storybook/angular";
import {WifiSettingsComponent} from "./wifi-settings.component";
import {defaultUsecasesParameters} from "../../../.storybook/utils";

export default {
  title: 'usecases/Settings',
  component: WifiSettingsComponent,
  parameters: {
    ...defaultUsecasesParameters
  }
} as Meta;

export const Wifi: Story<WifiSettingsComponent> = args => ({
  props: args
});
Wifi.storyName = 'Wi-Fi';

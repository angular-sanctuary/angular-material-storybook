import {Meta, Story} from "@storybook/angular";
import {WifiSettingsComponent} from "./wifi-settings.component";

export default {
  title: 'usecases/Settings',
  component: WifiSettingsComponent,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Wifi: Story<WifiSettingsComponent> = args => ({
  props: args
});
Wifi.storyName = 'Wi-Fi';

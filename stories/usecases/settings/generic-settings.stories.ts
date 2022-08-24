import {Meta, Story} from "@storybook/angular";
import {GenericSettingsComponent} from "./generic-settings.component";

export default {
  title: 'usecases/Settings',
  component: GenericSettingsComponent,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Generic: Story<GenericSettingsComponent> = args => ({
  props: args
});
Generic.storyName = 'generic'


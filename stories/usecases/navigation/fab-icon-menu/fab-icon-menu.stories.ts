import {Meta, Story} from "@storybook/angular";
import {defaultUsecasesParameters} from "../../../../.storybook/utils";
import {FabIconMenuComponent} from "./fab-icon-menu.component";

export default {
  title: 'Usecases/Navigation',
  component: FabIconMenuComponent,
  parameters: {
    ...defaultUsecasesParameters,
    viewport: {
      defaultViewport: 'mobile1'
    },
  }
} as Meta;

export const Fab: Story<FabIconMenuComponent> = args => ({
  props: args
});
Fab.storyName = 'fab menu (with icons)';

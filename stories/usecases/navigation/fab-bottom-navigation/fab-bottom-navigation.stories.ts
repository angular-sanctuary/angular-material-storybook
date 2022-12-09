import {Meta, StoryFn} from "@storybook/angular";
import {FabBottomNavigationComponent} from "./fab-bottom-navigation.component";
import {defaultUsecasesParameters} from "../../../../.storybook/utils";

export default {
  title: 'Usecases/Navigation',
  component: FabBottomNavigationComponent,
  parameters: {
    ...defaultUsecasesParameters,
    viewport: {
      defaultViewport: 'mobile1'
    },
  }
} as Meta;

export const Template: StoryFn<FabBottomNavigationComponent> = args => ({
  props: args
});
Template.storyName = 'bottom navigation 1';

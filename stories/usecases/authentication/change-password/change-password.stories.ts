import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {ChangePasswordComponent} from "./change-password.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {defaultUsecasesParameters} from "../../../../.storybook/utils";

export default {
  title: 'usecases/authentication/change password',
  component: ChangePasswordComponent,
  parameters: {
    ...defaultUsecasesParameters
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule
      ]
    })
  ]
} as Meta;

export const ChangePassword: StoryFn<ChangePasswordComponent> = args => ({
  props: args
});
ChangePassword.storyName = 'change password';

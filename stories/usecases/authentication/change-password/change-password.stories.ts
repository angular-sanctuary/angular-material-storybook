import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {ChangePasswordComponent} from "./change-password.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'usecases/authentication/change password',
  component: ChangePasswordComponent,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule
      ]
    })
  ]
} as Meta;

export const ChangePassword: Story<ChangePasswordComponent> = args => ({
  props: args
});
ChangePassword.storyName = 'change password';

import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {formFieldArgtypes} from "./form-field-argtype";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

export default {
  title: 'components/Form field',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
  ],
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: formFieldArgtypes
} as Meta;

export const AAWithBasicUsage: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
AAWithBasicUsage.storyName = 'basic usage';
AAWithBasicUsage.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStateFilled: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput [ngModel]="'admin'">
    </mat-form-field>
  `
});
WithStateFilled.storyName = 'with state (filled)';
WithStateFilled.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStateDisabled: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput disabled>
    </mat-form-field>
  `
});
WithStateDisabled.storyName = 'with state (disabled)';
WithStateDisabled.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStateFocused: Story = args => ({
  props: args,
  template: `
    <mat-form-field class="mat-focused" [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput [ngModel]="'admin'">
    </mat-form-field>
  `
});
WithStateFocused.storyName = 'with state (focused)';
WithStateFocused.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStateHover: Story = args => ({
  props: args,
  template: `
    <mat-form-field class="mat-focused" [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithStateHover.storyName = 'with state (hover)';
WithStateHover.parameters = {
  controls: {
    exclude: ['alignHint']
  },
  pseudo: {
    hover: true
  }
}

export const WithAppearanceLegacy: Story = args => ({
  props: {
    ...args,
    appearance: 'legacy'
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithAppearanceLegacy.storyName = 'with appearance (legacy)';
WithAppearanceLegacy.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithAppearanceStandard: Story = args => ({
  props: {
    ...args,
    appearance: 'standard'
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithAppearanceStandard.storyName = 'with appearance (standard)';
WithAppearanceStandard.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}


export const WithAppearanceFill: Story = args => ({
  props: {
    ...args,
    appearance: 'fill'
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithAppearanceFill.storyName = 'with appearance (fill)';
WithAppearanceFill.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithAppearanceOutline: Story = args => ({
  props: {
    ...args,
    appearance: 'outline'
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
    </mat-form-field>
  `
});
WithAppearanceOutline.storyName = 'with appearance (outline)';
WithAppearanceOutline.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithStartHint: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput>
        <mat-hint align="start">at least 8 characters</mat-hint>
    </mat-form-field>
  `
});
WithStartHint.storyName = 'with hint (start)';

export const WithEndHint: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Contributions</mat-label>
        <mat-select>
            <mat-option>Components</mat-option>
            <mat-option>Use cases</mat-option>
        </mat-select>
        <mat-hint align="end">Choose an option ^</mat-hint>
    </mat-form-field>
  `
});
WithEndHint.storyName = 'with hint (end)'

export const WithDoubleHints: Story = args => ({
  props: args,
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Username</mat-label>
        <input type="text" matInput #input [attr.maxlength]="10">
        <mat-hint align="start">Max 10 characters</mat-hint>
        <mat-hint align="end">{{input.value.length || 0}}/10</mat-hint>
    </mat-form-field>
  `
});
WithDoubleHints.storyName = 'with hint (double)'

export const WithPrefix: Story = args => ({
  props: {
    ...args,
    hide: true
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'">
        <mat-icon matPrefix>key</mat-icon>
    </mat-form-field>
  `
});
WithPrefix.storyName = 'with prefix';
WithPrefix.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithSuffix: Story = args => ({
  props: {
    ...args,
    hide: true
  },
  template: `
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'">
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
    </mat-form-field>
  `
});
WithSuffix.storyName = 'with suffix';
WithSuffix.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

export const WithPrefixAndSuffix: Story = args => ({
  props: {
    ...args,
    hide: true
  },
  template: `
    <style>
    .example-right-align {
        text-align: right;
    }

    input.example-right-align::-webkit-outer-spin-button,
    input.example-right-align::-webkit-inner-spin-button {
        display: none;
    }

    input.example-right-align {
        -moz-appearance: textfield;
    }
    </style>
    <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Amount</mat-label>
        <input matInput type="number" class="example-right-align" placeholder="0">
        <span matPrefix>$&nbsp;</span>
        <span matSuffix>.00</span>
  </mat-form-field>
  `
});
WithPrefixAndSuffix.storyName = 'with prefix and suffix';
WithPrefixAndSuffix.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

const control = new FormControl('', Validators.required);
control.markAsTouched();
export const WithErrorMessage: Story = args => ({
  props: {
    ...args,
    control: control
  },
  template: `
     <mat-form-field [appearance]="appearance" [color]="color" [floatLabel]="floatLabel" [hideRequiredMarker]="hideRequiredMarker" [hintLabel]="hintLabel">
        <mat-label>Password</mat-label>
        <input type="text" matInput [formControl]="control">
        <mat-error *ngIf="control.hasError('required')">This field is required</mat-error>
    </mat-form-field>
    `
});
WithErrorMessage.storyName = 'with error message';
WithErrorMessage.parameters = {
  controls: {
    exclude: ['alignHint']
  }
}

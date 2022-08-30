# Contributing

Welcome on this project!
These guidelines will help you to contribute.


## Contribution opportunities

### Add components examples

The components part of the project showcases sample examples of Angular Material components in isolation.
Some components or valuables examples might be missing as you are reading this.

#### Add a missing component

Create a folder matching the component name and using kebab-case format in the `stories/components` folder.
For example a foldernamed `radio-button` for the Radio button component.

Create a `<component-name>.argtype.ts` file in this new folder.
It'll define argtypes for the component for the ArgTable and Controls features.

Create a `<component-name>.stories.mdx` file in the same folder.
It'll provide an overview of the component :
- quick introduction
- how to add it in an Angular application
- link towards the official documentation
- showcase stories

Create a `<component-name>.stories.ts` for stories.

#### Add stories


### Add component use cases

Showcase Angular Material working together in a real world situation.
The limit is the sky but 

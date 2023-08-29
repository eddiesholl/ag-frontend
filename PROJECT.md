# Requirements and scope

## Epics and tasks

### A set of input pages that the user can switch between

- [x] The default view allows entering a start date and end date
- [x] Choose Beef view, 2 text input fields, including Back button support
- [x] Choose Fuel view, 2 text input fields

### Dynamic output page that instantly updates to show the user the latest results

- [x] Results page shows raw input values
- [x] Results page shows annual emissions
- [x] Output values are limited to 2 decimal places
- [x] Output values show a `-` when there is an error

### Input validation

- [x] In the Beef inputs, implement the following validation: If the user has entered a value greater than 0 for Number of animals Average liveweight must be greater than 0
- [x] In both input pages, the user must enter a value for every text box/input field. If they try to click Back without having entered something, an error must appear. If any error or validation message is visible to the user on that page, they cannot go Back.

## Data model

To help choose a state management style, I wanted to outline the data model early on. A lot of the focus is on forms and validation. It may end up that using a heavier form library could be the best match in the long run, to start with I've chosen modern redux, syntax to avoid getting stuck in a corner.

UPDATE: OK, yes I did end up switching to a form library over redux: [react-hook-form](https://react-hook-form.com). I knew there was a chance I'd end up at that point. You can see in the diff from the react-hook-form branch vs master at that point, there's a substantial reduction in the size of the code base. With validation bundled into redux, and implemented via selectors, there's a lot of dealing with individual methods for setting values, selecting them, and selecting their valid state too. I was considering storing or selecting something like a `Result` type in the redux store, but there's just much less boilerplate needed if `react-hook-form` is storing input values, and checking if they are valid.

Inputs:

- Business activities
  - Start date (Date/string)
  - End date (Date/string)
- Beef
  - Number of animals (number)
  - Average liveweight (number)
- Fuel
  - Diesel yearly use (number)
  - Petrol yearly use (number)

Results:

- All input values
- Calculated fields
  - Total fuel emissions (number)
  - Total animal emissions (number)

## Infrastructure and tools

### Before getting started

I like using nvm to ensure everyone uses the same version of node. Initially I added a `.nvmrc ` file with a version that seemed roughly in sync with how the repo was created (v16.20.2, based on lockfile version. This is `lts/gallium`).

There was also a linter warning in `App.tsx`, and a runtime warning about missing `@babel/plugin-proposal-private-property-in-object` as a dev dependency.

### Tailwind and flowbite

Before I started with raw html elements, I thought I should drop in a component library, so I could include it from the start. I've heard good things about tailwind but never had a chance to really try it out, I landed on [flowbite](https://flowbite.com/react/) from Figma as a set of tools to try out.

UPDATE: OK after getting through most functionality, I've found this unnecessary. I've removed it from the project. I'm just using some tailwind utilities for styling, and don't need any external components.

## Project readiness checklist

- [x] `npm start` runs cleanly
- [x] `npm test` completes cleanly
- [x] no linter warnings or errors
- [x] PROJECT.md is complete

## Ongoing maintenance

To ensure this starting point of an app would be successful when used for real, with a larger team and with additional features, there's a few aspects worth pointing out.

The data model is effectively owned by `react-hook-form`. Inputs and their validation rules are registered at a namespace (for example `beef.numberOfAnimals`), and errors and values are selected with that namespace. This would be an aspect to take care with. For example there might be a rule imposed that every input path is of the form `page.inputName`. Every `page` and `inputName` value should be exported as `const` values, so that access to values and errors can be reliable and maintained over time, instead of using magic strings. They could even be enforced as discriminated unions for further safety, and ease of refactoring in the future.

It's likely that the number of inputs would grow over time. It might be nice to define the set of all inputs with some sort of schema, and programatically lay out the input pages. Something like:

```ts
type Input = {
  name: string;
  label: string;
  type: 'number' | 'date';
  validation?: (value: any) => boolean;
}

type InputCategory = {
  name: string;
  label: string;
  inputs: Input[];
}

const inputs: InputCategory[] = [{
  name: 'beef',
  label: 'Beef',
  inputs: [{
    name: 'numberOfAnimals',
    label: 'Number of animals',
    type: 'number',
    validation: (value) => value > 0,
  },
  ...
  ]
}]
```

Taking it further, you could also attach the rules for displaying results ie transforming then rendering your inputs as results. The schema can become a library of emissions inputs, rules, and outputs. The UI is then just a projection over that schema, and is highly extensible.

As the complexity of the rules grows, testing for correctness of rendering and calculations should be manageable, but domain expertise would be required to make sure the rules themselves are actually correct. That is, a bunch of rules stuck inside a repo will need to be carefully validated by someone with product input. Maybe you need some sort of simple CMS for managing all those rules, with change management, history etc.

When the calculations become more complex, there will likely be a backend needed for the calculation. If that's the case, the app the architecture and the team structure would need to evolve. If you follow the idea of defining your inputs with a schema, you could leverage code generation, or at least a single source of truth document, to keep the 2 in sync. That is, all the inputs and the rules for processing them are defined in one place, and the frontend and backend are generated from that. This would be a good way to ensure the frontend and backend are in sync, and that the frontend is always up to date with the latest rules. You can then have dedicated backend and frontend teams that specialise in their own piece of the stack.

The UI also needs to evolve when results are sent off to the backend for calculations. They results will be stale until the latest have been retrieved, so the UI will need to help the user understand this.

## TODOs and revisits

There is a warning when running `npm install` that the node engine version is not compatible with `true-myth`. The compilation style is different for each recent major version of this dependency, I've wasted enough time already trying to get it importing and compiling correctly, so I'm just going to leave it as is. There's also a warning when running `npm start` about failing to find valid source maps for `true-myth`, which is in the same category.

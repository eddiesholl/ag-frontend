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

To help choose a state management style, I wanted to outline the data model. A lot of the focus is on forms and validation. It may end up that using a heavier form library could be the best match in the long run, for now I've chosen modern redux syntax to avoid getting stuck in a corner.

UPDATE: OK, yes I did choose to use a form library over redux: [react-hook-form](https://react-hook-form.com). I knew there was a chance I'd end up at that point. You can see in the diff from the react-hook-form branch vs master at that point, there's a substantial reduction in the size of the code base. With validation bundled into redux, and implemented via selectors, there's a lot of dealing with individual methods for setting values, selecting them, and selecting their valid state too. I was considering storing or selecting something like a `Result` type, but there's just much less boilerplate needed if `react-hook-form` is storing input values, and checking if they are valid.

Inputs:

- Business activities
  - Start date (Date object)
  - End date (Date object)
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

I like using nvm to ensure everyone uses the same version of node. Initially I added a .nvmrc version with a version that seemed roughly in sync with how the repo was created (v16.20.2, based on lockfile version. This is `lts/gallium`).

There was also a linter warning in App.tsx, and a runtime warning about missing `@babel/plugin-proposal-private-property-in-object` as a dev dependency.

### Tailwind and flowbite

Before I started with raw html elements, I thought I should drop in a component library, so I could include it from the start. I've heard good things about tailwind but never had a chance to really try it out, I landed on [flowbite](https://flowbite.com/react/) from Figma as a set of tools to try out.

## Project readiness checklist

- [ ] `npm start` runs cleanly
- [ ] `npm test` completes cleanly
- [ ] no linter warnings or errors
- [ ] PROJECT.md is complete

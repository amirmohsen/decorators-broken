# Broken Decorators
This is an example that shows how decorators are broken (in babel as of version 7.23.7).

## How to run
Run the following commands to setup and run the project in order to see the error:

- Install dependencies without any changes: `yarn --immutable`
- Build: `yarn build`
- Run: `yarn start`

## What is going wrong?
Instead of passing the result of one decorator to the next, the `Target` class gets passed to each decorator and as a result, the last applied decorator result overrides the preceeding ones.

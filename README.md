# TypeScript Optional Property Bug

This repository demonstrates a common, yet subtle, bug in TypeScript related to optional properties in function parameters. The bug arises when a function expects an object with certain properties, but those properties are not explicitly marked as optional, and the function is called with an object missing one or more required properties.

## Bug Description
The provided TypeScript code defines a function `printCoord` that takes an object with `x` and `y` properties. However, if you call this function with an object missing either property, a runtime error will occur rather than a compile-time error from TypeScript. This happens because TypeScript's type checking doesn't strictly enforce the presence of properties unless they're explicitly declared as optional using the `?` syntax.

## Solution
The solution involves modifying the function signature to explicitly mark the `x` and `y` properties as optional using the `?` syntax. This tells TypeScript that these properties are allowed to be missing, preventing the runtime error and improving type safety. 
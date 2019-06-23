# Modules

There are 4 types of modules in Syntek.

[[toc]]

## Syntek Module

Syntek modules are Syntek source files. Syntek source files have the `.tek` file extension. When importing a Syntek module all variables declared in the file scope of the module are imported. A Syntek module may also import other modules.

## Native Module

Native modules add extra functionality to Syntek. Native modules make it possible to port Syntek to different environments, such as Node.js and Arduino. Native modules can install dependencies, add native functions, change configuration, and more.

## Data Module

Data modules are configuration files, such as YAML and JSON. The modules are automatically converted to objects for easy access.

## Text Module

A text module is a file that is not a Syntek, native, or data module. This file is read as text and returned as a string.

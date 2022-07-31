# counter

A zero-dependency, vanilla JavaScript library for creating counter animations.

## Installation

NPM:

    npm install @jarijokinen/counter --save

Yarn:

    yarn add @jarijokinen/counter

## Usage

    import { counter } from '@jarijokinen/counter';

    document.addEventListener('DOMContentLoaded', () => {
      counter();
    });

HTML:

    <span data-counter="20">20</span>

## Configuration

    const options = {
      elements: document.querySelectorAll('[data-counter]'),
      delay: 500,
      duration: 2000,
      fps: 60
    };

    counter(options);

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/counter/blob/main/LICENSE.txt)
for further details.

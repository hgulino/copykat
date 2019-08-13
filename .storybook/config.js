import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
// registerRequireContextHook();

// const req = global.__requireContext(__dirname, '../app', true, /\.stories\.js$/)

const req = require.context('../app', true, /\.stories\.js$/);


function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

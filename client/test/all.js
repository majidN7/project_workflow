 

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var scopedTests = require.context('../src', true, /\/__tests__\/[a-zA-Z]+Spec\.js$/);

scopedTests.keys().forEach(scopedTests);

var allTests = require.context('.', true, /(spec|integration)[a-zA-Z]+Spec\.js$/);

allTests.keys().forEach(allTests);

// we exclude remote stubs + utilities during coverage
// reporting to not distort the resulting report
var allSources = require.context('../src/app', true, /\.js$/);

allSources.keys().forEach(allSources);
 

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var scopedTests = require.context('../src', true, /\/__tests__\/[a-zA-Z0-9]+Spec\.js$/);

scopedTests.keys().forEach(scopedTests);

var allTests = require.context('.', true, /(spec|integration)[a-zA-Z0-9]+Spec\.js$/);

allTests.keys().forEach(allTests);
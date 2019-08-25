import initStoryshots, {
  multiSnapshotWithOptions
} from '@storybook/addon-storyshots';
import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  test: multiSnapshotWithOptions({
    renderer: mount,
    snapshotSerializers: [createSerializer()]
  })
});

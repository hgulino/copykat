import MockDate from 'mockdate'
import { formattedTimestamp } from '../../app/renderer/utils'

describe('format date for file name', () => {
    test('should return formatted time', () => {
        MockDate.set('1/1/2000');
        expect(formattedTimestamp()).toBe('2000-1-1-000')
    });
})
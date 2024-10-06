import _ from 'lodash';

export function isValidArray(arr: unknown[]): boolean {
    return _.isArray(arr) && arr.length > 0;
}
import _ from 'lodash';

export function isValidArray(arr: any[]): boolean {
    return _.isArray(arr) && arr.length > 0;
}
import { types } from 'mobx-state-tree';

export default types.model({
    user: types.identifier,
    text: types.string,
    date: types.Date
});

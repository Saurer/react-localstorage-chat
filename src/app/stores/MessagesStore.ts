import { types } from 'mobx-state-tree';
import Message from 'models/Message';

export default types
    .model({
        values: types.optional(types.array(Message), [])
    })
    .actions(self => ({
        addMessage(data: { user: string; text: string }) {
            self.values.push({
                ...data,
                date: new Date()
            });
        },
        clear() {
            self.values.clear();
        }
    }))
    .views(self => ({
        get sortedValues() {
            return self.values
                .slice()
                .sort((a, b) => a.date.getTime() - b.date.getTime());
        }
    }));

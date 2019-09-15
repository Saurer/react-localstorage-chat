import { types, SnapshotIn, Instance } from 'mobx-state-tree';
import MessagesStore from './MessagesStore';

export default types
    .model({
        user: types.maybe(types.string),
        messages: MessagesStore
    })
    .actions(self => ({
        login(user: string) {
            self.user = user;
        },

        sendMessage(text: string) {
            self.messages.addMessage({
                user: self.user,
                text
            });
        },

        acceptSnapshot(snapshot: SnapshotIn<typeof MessagesStore>) {
            self.messages = snapshot as Instance<typeof MessagesStore>;
        },

        logout() {
            self.user = undefined;
        }
    }))
    .views(self => ({
        get isLogged() {
            return 'string' === typeof self.user && 0 < self.user.length;
        }
    }));

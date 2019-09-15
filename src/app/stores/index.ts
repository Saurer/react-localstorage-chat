import RootStore from './RootStore';
import { onSnapshot } from 'mobx-state-tree';
import { loadData, saveData, processEvent } from 'lib/storage';

const isServer = 'undefined' === typeof window;

const loadedMessages = !isServer && loadData();

const rootStore = RootStore.create({
    messages: loadedMessages || {}
});

onSnapshot(rootStore.messages, snapshot => {
    saveData(snapshot);
});

if (!isServer) {
    window.addEventListener('storage', e => {
        processEvent(e, snapshot => {
            rootStore.acceptSnapshot(snapshot);
        });
    });
}

export default rootStore;

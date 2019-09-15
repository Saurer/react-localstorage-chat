import { castToSnapshot, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import MessagesStore from 'stores/MessagesStore';

const STORAGE_KEY = 'chat_messages';

export const parseData = (data: any) => {
    try {
        const parsedJson = JSON.parse(data);

        if (MessagesStore.is(parsedJson)) {
            return castToSnapshot(parsedJson) as SnapshotOut<
                typeof MessagesStore
            >;
        } else {
            return undefined;
        }
    } catch {
        return undefined;
    }
};

export const loadData = () => {
    const loadedData = localStorage.getItem(STORAGE_KEY);
    return parseData(loadedData);
};

export const saveData = (payload: SnapshotIn<typeof MessagesStore>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

export const processEvent = (
    e: StorageEvent,
    callback: (value: SnapshotOut<typeof MessagesStore>) => void
) => {
    if (STORAGE_KEY === e.key) {
        const newValue = parseData(e.newValue);
        if (newValue) {
            callback(newValue);
        }
    }
};

import { create } from 'zustand';

export interface IMessage {
  id?: number;
  message: string;
  type: 'success' | 'error';
  time: number;
}

export interface IMessageStore {
  messagesToDisplay: IMessage[];
  timeoutArray: NodeJS.Timeout[];
  createMessage: (messageInfo: IMessage) => void;
  deleteMessage: (id: number, time: number) => void;
  removeAllTimeouts: () => void;
}

const messageStore = create<IMessageStore>((set, get) => ({
  messagesToDisplay: [],
  timeoutArray: [],
  createMessage: (messageInfo: IMessage) =>
    set((store) => {
      const copiedMessage = { ...messageInfo };
      copiedMessage.id = new Date().getTime();
      store.deleteMessage(copiedMessage.id, messageInfo.time);
      return { messagesToDisplay: [...store.messagesToDisplay, copiedMessage] };
    }),
  deleteMessage: (id: number, time: number) => {
    const timeoutForDeletion = setTimeout(() => {
      const currentMessagesList = [...get().messagesToDisplay];

      const indexToDelete = currentMessagesList.findIndex((item) => item.id === id);
      indexToDelete !== -1 && currentMessagesList.splice(indexToDelete, 1);
      const currentTimeoutArray = [...get().timeoutArray].filter((item) => {
        return item !== timeoutForDeletion;
      });
      set(() => ({ messagesToDisplay: currentMessagesList, timeoutArray: currentTimeoutArray }));
    }, time);
    set((store) => ({ timeoutArray: [...store.timeoutArray, timeoutForDeletion] }));
  },
  removeAllTimeouts: () => {
    get().timeoutArray.forEach((item) => {
      clearTimeout(item);
    });
    set(() => ({ messagesToDisplay: [], timeoutArray: [] }));
  },
}));

export default messageStore;

export const sendMessageToDisplay = (message: string, type: 'success' | 'error' = 'success', time = 3000) => {
  messageStore.getState().createMessage({ message, type, time });
};
export const removeAllMessages = () => {
  messageStore.getState().removeAllTimeouts();
};

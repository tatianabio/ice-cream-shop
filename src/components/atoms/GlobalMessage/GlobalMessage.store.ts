import create from 'zustand';

export interface IMessage {
  id?: number;
  message: string;
  type: 'success' | 'error';
  time: number;
}

export interface IMessageStore {
  messagesToDisplay: IMessage[];
  createMessage: (messageInfo: IMessage) => void;
  deleteMessage: (id: number, time: number) => void;
}

const messageStore = create<IMessageStore>((set, get) => ({
  messagesToDisplay: [],
  createMessage: (messageInfo: IMessage) =>
    set((store) => {
      const copiedMessage = { ...messageInfo };
      copiedMessage.id = new Date().getTime();
      store.deleteMessage(copiedMessage.id, messageInfo.time);
      return { messagesToDisplay: [...store.messagesToDisplay, copiedMessage] };
    }),
  deleteMessage: (id: number, time: number) => {
    setTimeout(() => {
      const currentMessagesList = [...get().messagesToDisplay];

      const indexToDelete = currentMessagesList.findIndex((item) => item.id === id);
      indexToDelete !== -1 && currentMessagesList.splice(indexToDelete, 1);

      set(() => ({ messagesToDisplay: currentMessagesList }));
    }, time);
  },
}));

export default messageStore;

export const sendMessageToDisplay = (message: string, type: 'success' | 'error' = 'success', time = 3000) => {
  messageStore.getState().createMessage({ message, type, time });
};

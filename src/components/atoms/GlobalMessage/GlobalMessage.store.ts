import create from 'zustand';

export interface IMessage {
  id?: number;
  message: string;
  type: 'success' | 'error';
  time: number;
}

export interface IMessageStore {
  messagesToShow: IMessage[];
  createMessage: (messageInfo: IMessage) => void;
  deleteMessage: (id: number, time: number) => void;
}

const messageStore = create<IMessageStore>((set, get) => ({
  messagesToShow: [],
  createMessage: (messageInfo: IMessage) =>
    set((store) => {
      const copiedMessage = { ...messageInfo };
      copiedMessage.id = new Date().getTime();
      store.deleteMessage(copiedMessage.id, messageInfo.time);
      return { messagesToShow: [...store.messagesToShow, copiedMessage] };
    }),
  deleteMessage: (id: number, time: number) => {
    setTimeout(() => {
      const currentMessagesList = [...get().messagesToShow];

      const indexToDelete = currentMessagesList.findIndex((item) => item.id === id);
      indexToDelete !== -1 && currentMessagesList.splice(indexToDelete, 1);

      set(() => ({ messagesToShow: currentMessagesList }));
    }, time);
  },
}));

export default messageStore;

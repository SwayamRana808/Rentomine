import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	location:null,
    setLocation:(location) => set({location}),
	ProductsCards:[],
	setProductsCards:(ProductsCards)=>set ({ProductsCards})
}));

export default useConversation;
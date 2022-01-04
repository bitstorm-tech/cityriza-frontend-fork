import { writable } from 'svelte/store';

const merchantItems = writable([
  {
    id: 'id1',
    name: 'Merchant1_aha',
    startDate: '17.01.2022',
    endDate: '17.01.2023'
  },
  {
    id: 'id2',
    name: 'Merchant2_yes',
    startDate: '27.03.2022',
    endDate: '27.03.2023'
  },
  {
    id: 'id3',
    name: 'Merchant3_nadann',
    startDate: '17.02.2022',
    endDate: '17.02.2023'
  }
]);

const customMerchantItemsStore = {
  subscribe: merchantItems.subscribe,
  addMerchantItem: (merchantItemData) => {
    const newMerchantItem = {
      ...merchantItemData,
      id: Math.random().toString()
    };
    merchantItems.update((items) => {
      return [newMerchantItem, ...items];
    });
  },
  removeMerchantItem: (id) => {
    merchantItems.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
  updateMerchantItem: (id, merchantItemData) => {
    merchantItems.update((items) => {
      const merchantItemIndex = items.findIndex((i) => i.id === id);
      const updateMerchantItem = { ...items[merchantItemIndex], ...merchantItemData };
      const updatedMerchantItems = [...items];
      updatedMerchantItems[merchantItemIndex] = updateMerchantItem;
      return updatedMerchantItems;
    });
  }
};

export default customMerchantItemsStore;

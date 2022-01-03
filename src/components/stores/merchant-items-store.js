import { writable } from 'svelte/store';

const merchantItems = writable([
  {
    id: 'id1',
    name: 'Netzwerk1_juhu',
    startDate: '111',
    endDate: '222'
  },
  {
    id: 'id2',
    name: 'Netzwerk2_cool',
    startDate: '333',
    endDate: '444'
  },
  {
    id: 'id3',
    name: 'Netzwerk3_oleole',
    startDate: '555',
    endDate: '777'
  }
]);

const customMerchantItemsStore = {
  subscribe: merchantItems.subscribe,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addMerchantItem: (merchantItemData) => {
    const newMerchantItem = {
      ...merchantItemData,
      id: Math.random().toString()
    };
    merchantItems.update((items) => {
      return [newMerchantItem, ...items];
    });
  }
};

export default customMerchantItemsStore;

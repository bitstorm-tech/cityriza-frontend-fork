/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { writable } from 'svelte/store';

const networkItems = writable([
  {
    id: 'id1',
    name: 'Netzwerk1_juhu',
    amountOfDisplays: '111',
    merchants: '222'
  },
  {
    id: 'id2',
    name: 'Netzwerk2_cool',
    amountOfDisplays: '333',
    merchants: '444'
  },
  {
    id: 'id3',
    name: 'Netzwerk3_oleole',
    amountOfDisplays: '555',
    merchants: '777'
  }
]);

const customNetworkItemsStore = {
  subscribe: networkItems.subscribe,
  addNetworkItem: (networkItemData) => {
    const newNetworkItem = {
      ...networkItemData,
      id: Math.random().toString()
    };
    networkItems.update((items) => {
      return [newNetworkItem, ...items];
    });
  },
  removeNetworkItem: (id) => {
    networkItems.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
  updateNetworkItem: (id, networkItemData) => {
    networkItems.update((items) => {
      const networkItemIndex = items.findIndex((i) => i.id === id);
      const updateNetworkItem = { ...items[networkItemIndex], networkItemData };
      const updatedNetworkItems = [...items];
      updatedNetworkItems[networkItemIndex] = updateNetworkItem;
      return updatedNetworkItems;
    });
  }
};

export default customNetworkItemsStore;

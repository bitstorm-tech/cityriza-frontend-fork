import { writable } from 'svelte/store';

const networkItems = writable([
  {
    id: 'id1',
    name: 'Netzwerk1_juhu',
    amountOfDisplays: 111,
    merchants: 222
  },
  {
    id: 'id2',
    name: 'Netzwerk2_cool',
    amountOfDisplays: 333,
    merchants: 444
  },
  {
    id: 'id3',
    name: 'Netzwerk3_oleole',
    amountOfDisplays: 555,
    merchants: 777
  }
]);

export default networkItems;

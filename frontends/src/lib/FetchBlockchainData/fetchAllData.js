import fetchEosData from './fetchEosData';

const fetchAllData = async (eosAddressArr, thisObject) => {
  await fetchEosData(eosAddressArr, thisObject);
};

export default fetchAllData;

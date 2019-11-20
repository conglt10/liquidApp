import fetchEosData from 'lib/FetchBlockchainData/fetchEosData';

const fetchAllData = async (eosAddressArr, thisObject) => {
  await fetchEosData(eosAddressArr, thisObject);
};

export default fetchAllData;

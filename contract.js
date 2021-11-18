import { TestIceCreamAddress, TestIceCreamAbi } from './contracts/TestIceCream.js';
import { web3 } from './connectWallet.js';


export let address;
export let abi;
export let mintPrice;

/*if (window?.WEBSITE_URL?.includes(window.location.hostname)) {
  address = window.CONTRACT_ADDRESS;
  abi = typeof window.CONTRACT_ABI === 'string'
      ? JSON.parse(window.CONTRACT_ABI) : window.CONTRACT_ABI;
}else {
  address = TestIceCreamAddress;
  abi = TestIceCreamAbi;
} */

address = TestIceCreamAddress;
abi = TestIceCreamAbi;

export let contract = new web3.eth.Contract(abi, address);

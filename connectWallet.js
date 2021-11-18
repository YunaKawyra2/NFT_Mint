/*export const web3 = new Web3(ethereum);*/
/*export const web3 = Web3(Web3.HTTPProvider('https://ropsten.infura.io/v3/9912d6b0054b4a249bef9b00e28acef1'));*/

/*web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/9912d6b0054b4a249bef9b00e28acef1'));*/
export const Web3 = require("web3");
web3 = new Web3(new Web3.providers.WebsocketProvider('wws://ropsten.infura.io/v3/9912d6b0054b4a249bef9b00e28acef1'));



const isMetaMaskConnected = async () => {
    let accounts = await web3.eth.getAccounts();
    return accounts.length > 0;
}

export const updateMetaMaskStatus = () => {
  isMetaMaskConnected().then((connected) => {
    let button = document.querySelector('#connect');
    if (button && connected) {
        button.textContent = "MetaMask connected";
    }
  });
}

export const connectMetaMask = async (shouldReload = true) => {
  if (await isMetaMaskConnected() === false) {
    await ethereum.enable();
    await updateMetaMaskStatus();
    if (shouldReload) {
      location.reload();
    }
  }
}

document.onload = updateMetaMaskStatus();
document.querySelector('#connect')?.addEventListener('click', connectMetaMask);

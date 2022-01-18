import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { blitterAddress, blitterAbi } from '../Utils/constants';

export const BlitterContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const blitterContract = new ethers.Contract(blitterAddress, blitterAbi, signer);
    console.log(provider, signer, blitterContract);
}

export const BlitterProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');

    const isWalletConnected = async () => {
        try {
            if (!ethereum)
                return alert("Please connect metamask");
    
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            
            if (accounts.length)
                setCurrentAccount(accounts[0]);
            else
                console.log("No accounts found");
        } catch (error) {
            console.error(error);
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum)
                return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);

            throw new Error('No ethereum object');
        }
    }

    useEffect(() => {
        isWalletConnected(); 
    }, []);

    return (
        <BlitterContext.Provider value={{ connectWallet, currentAccount }}>
            { children }
        </BlitterContext.Provider>
    )
}

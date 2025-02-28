'use client';

import { ConnectKitProvider, createConfig } from '@particle-network/connectkit';
import { authWalletConnectors } from '@particle-network/connectkit/auth';
import { mainnet, solana } from '@particle-network/connectkit/chains';
import { evmWalletConnectors } from '@particle-network/connectkit/evm';
import { injected as solaInjected, solanaWalletConnectors } from '@particle-network/connectkit/solana';
import { wallet, EntryPosition } from '@particle-network/connectkit/wallet';
import React from 'react';

// Retrieved from https://dashboard.particle.network
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string;
const appId = process.env.NEXT_PUBLIC_APP_ID as string;
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;

if (!projectId || !clientKey || !appId) {
   throw new Error('Please configure the Particle project in .env first!');
}

const config = createConfig({
   projectId,
   clientKey,
   appId,
   appearance: {
      recommendedWallets: [
         { walletId: 'metaMask', label: 'Recommended' },
         { walletId: 'coinbaseWallet', label: 'popular' },
      ],
      splitEmailAndPhone: false,
      collapseWalletList: false,
      hideContinueButton: false,
      connectorsOrder: ['email', 'phone', 'social', 'wallet'],
      language: 'en-US',
      mode: 'light',
      theme: {
         // Remove unsupported properties
      },
      logo: 'https://github.com/Jossyboydgenius/Zenode/blob/c56dbf5453a9d7c35df410e009cef9ea918432f3/public/logo.png?raw=true',
      filterCountryCallingCode: (countries) => {
         return countries.filter((item) => item === 'US');
      },
   },
   walletConnectors: [
      evmWalletConnectors({
         metadata: { name: 'My App', icon: '', description: '', url: '' },
         walletConnectProjectId: 'Replace with your WalletConnect Project ID',
      }),
      authWalletConnectors({
         authTypes: ['github'],
         fiatCoin: 'USD',
         promptSettingConfig: {
            promptMasterPasswordSettingWhenLogin: 1,
            promptPaymentPasswordSettingWhenSign: 1,
         },
      }),
      solanaWalletConnectors(),
   ],
   plugins: [
      wallet({
         entryPosition: EntryPosition.BR,
         visible: true,
         customStyle: {
            displayTokenAddresses: ["0x4d224452801ACEd8B2F0aebE155379bb5D594381"],
            priorityTokenAddresses: ["0x4d224452801ACEd8B2F0aebE155379bb5D594381"],
         },
      }),
   ],
   chains: [mainnet, solana],
});

// Export ConnectKitProvider to be used within your index or layout file (or use createConfig directly within those files).
export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
   return (
      <ConnectKitProvider config={config}>
         <div className="custom-connect-button">{children}</div>
      </ConnectKitProvider>
   );
};
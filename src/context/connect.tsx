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
         // Using the CustomTheme properties from the type definition
         // '--pcm-rounded-md': '0.5rem',
         // '--pcm-rounded-lg': '0.75rem',
         // '--pcm-rounded-xl': '1rem',
         // '--pcm-body-background': '#000000',
         // '--pcm-body-color': '#ffffff',
         // '--pcm-body-color-secondary': '#9ca3af',
         // '--pcm-overlay-background': 'rgba(0, 0, 0, 0.8)',
         // '--pcm-overlay-backdrop-filter': 'blur(4px)',
         // '--pcm-button-font-weight': '600',
         // '--pcm-primary-button-bankground': 'linear-gradient(to right, #4ade80, #22d3ee)',
         // '--pcm-primary-button-hover-background': 'linear-gradient(to right, #4ade80, #22d3ee)',
         '--pcm-primary-button-color': '#4ade80',
         '--pcm-secondary-button-bankground': 'rgba(0, 0, 0, 0.4)',
         '--pcm-secondary-button-hover-background': 'rgba(255, 255, 255, 0.05)',
         // '--pcm-secondary-button-color': '#ffffff',
         // '--pcm-accent-color': '#4ade80',
         // '--pcm-success-color': '#4ade80',
         // '--pcm-button-hover-shadow': '0 0 0 2px rgba(74, 222, 128, 0.3)',
      },
      logo: 'https://github.com/Jossyboydgenius/Zenode/blob/c56dbf5453a9d7c35df410e009cef9ea918432f3/public/logo.png?raw=true',
      filterCountryCallingCode: (countries) => {
         return countries.filter((item) => item === 'US');
      },
   },
   walletConnectors: [
      evmWalletConnectors({
         metadata: { name: 'Zenode', icon: 'https://github.com/Jossyboydgenius/Zenode/blob/c56dbf5453a9d7c35df410e009cef9ea918432f3/public/logo.png?raw=true', description: 'Next-Gen Blockchain Development Platform', url: '' },
         walletConnectProjectId: walletConnectProjectId || 'Replace with your WalletConnect Project ID',
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
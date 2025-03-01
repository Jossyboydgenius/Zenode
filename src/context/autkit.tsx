// import React from 'react'
// // import ReactDOM from 'react-dom/client'
// import { AuthType } from '@particle-network/auth-core';
// import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/authkit';
// import { mainnet } from '@particle-network/authkit/chains';
// // import App from './App'

// import('buffer').then(({ Buffer }) => {
//    window.Buffer = Buffer;
// });

// // ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

// // <React.StrictMode>

// export default function AuthCoreProvider({ children }: { children: React.ReactNode }) {
//    return (

//       <AuthCoreContextProvider
//          options={{
//             projectId: import.meta.env.VITE_PROJECT_ID!,
//             clientKey: import.meta.env.VITE_CLIENT_KEY!,
//             appId: import.meta.env.VITE_APP_ID!,
//             chains: [mainnet],
//             authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
//             themeType: "dark", // Login modal theme
//             fiatCoin: "USD",
//             language: "en",
//             // optional, ERC4337
//             erc4337: {
//                name: "SIMPLE",
//                version: "2.0.0",
//             },
//             // You can prompt the user to set up extra security measure upon login or other interactions
//             promptSettingConfig: {
//                promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
//                promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
//             },
//             wallet: {
//                themeType: 'dark', // Wallet modal theme
//                visible: true,
//                customStyle: {
//                   displayTokenAddresses: ["0x4d224452801ACEd8B2F0aebE155379bb5D594381"], // Display a custom token within the wallet modal
//                   priorityTokenAddresses: ["0x4d224452801ACEd8B2F0aebE155379bb5D594381"],
//                },
//             },
//          }}
//       >
//          {children}
//       </AuthCoreContextProvider>
//    );
// }
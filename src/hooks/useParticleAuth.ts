// import { useCallback, useEffect, useState } from 'react';
// import { useConnect } from '@particle-network/connectkit';
// import { AuthType } from '@particle-network/auth-core';

// interface UserInfo {
//    avatar: string;
//    email: string;
//    name: string;
//    uuid: string;
//    [key: string]: any;
// }

// export const useParticleAuth = () => {
//    const connectKit = useConnect();
//    const [isConnected, setIsConnected] = useState(false);
//    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

//    useEffect(() => {
//       const checkConnection = async () => {
//          const connected = await connectKit.isConnected();
//          setIsConnected(connected);
//          if (connected) {
//             const info = await connectKit.getUserInfo();
//             setUserInfo(info);
//          }
//       };

//       checkConnection();
//    }, [connectKit]);

//    const connect = useCallback(async (authType: AuthType) => {
//       try {
//          const result = await connectKit.connect({
//             socialType: authType,
//             authorize: true,
//          });
//          setIsConnected(true);
//          setUserInfo(result);
//          return result;
//       } catch (error) {
//          console.error('Connection error:', error);
//          throw error;
//       }
//    }, [connectKit]);

//    const disconnect = useCallback(async () => {
//       try {
//          await connectKit.disconnect();
//          setIsConnected(false);
//          setUserInfo(null);
//       } catch (error) {
//          console.error('Disconnect error:', error);
//          throw error;
//       }
//    }, [connectKit]);

//    return {
//       isConnected,
//       userInfo,
//       connect,
//       disconnect,
//       connectKit
//    };
// }; 
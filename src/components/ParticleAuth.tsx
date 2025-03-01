// import { Button, Space } from 'antd';
// import { AuthType } from '@particle-network/auth-core';
// import { useConnect } from '@particle-network/connectkit';

// export const ParticleAuth = () => {
//    const { connect, disconnect, status, data: userInfo } = useConnect();

//    const handleLogin = async (authType: AuthType) => {
//       try {
//          await connect({
//             preferredAuthType: authType,
//             authorize: true,
//             supportAuthTypes: [
//                AuthType.email,
//                AuthType.google,
//                AuthType.twitter,
//                AuthType.github,
//                AuthType.discord
//             ],
//          });
//       } catch (error) {
//          console.error('Login error:', error);
//       }
//    };

//    const handleLogout = async () => {
//       try {
//          await disconnect();
//       } catch (error) {
//          console.error('Logout error:', error);
//       }
//    };

//    return (
//       <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 p-4">
//          {status === 'success' && userInfo ? (
//             <div className="flex flex-col items-end gap-2">
//                <p className="text-white">Connected!</p>
//                <Space>
//                   <Button onClick={handleLogout}>
//                      Disconnect
//                   </Button>
//                </Space>
//             </div>
//          ) : (
//             <Space direction="vertical">
//                <Button onClick={() => handleLogin(AuthType.google)}>
//                   Login with Google
//                </Button>
//                <Button onClick={() => handleLogin(AuthType.twitter)}>
//                   Login with Twitter
//                </Button>
//                <Button onClick={() => handleLogin(AuthType.github)}>
//                   Login with GitHub
//                </Button>
//                <Button onClick={() => handleLogin(AuthType.discord)}>
//                   Login with Discord
//                </Button>
//                <Button onClick={() => handleLogin(AuthType.email)}>
//                   Login with Email
//                </Button>
//             </Space>
//          )}
//       </div>
//    );
// }; 
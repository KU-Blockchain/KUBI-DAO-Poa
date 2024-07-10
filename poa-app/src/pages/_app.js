import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { IPFSprovider } from "@/context/ipfsContext";
import { Web3Provider } from "@/context/web3Context";
import { DataBaseProvider } from "@/context/dataBaseContext";
import { GraphProvider } from "@/context/graphContext";
import { ProfileHubProvider } from "@/context/profileHubContext";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  polygonAmoy,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import NetworkModalControl from "@/components/NetworkModalControl";





const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: 'Poa',
  projectId: '7dc7409d6ef96f46e91e9d5797e4deac',
  chains: [polygon, sepolia, polygonAmoy],
  ssr: false,
});


const theme = extendTheme({
  fonts: {
    heading: "'Roboto Mono', monospace", 
    body: "'Roboto Mono', monospace", 
  },
  styles: {
    global: {
     
      body: {
        bgGradient: "linear(to-r, orange.200, pink.200)",
        color: "#001443",
      },
      
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider  initialChain={polygonAmoy}>
          <IPFSprovider>
            <ProfileHubProvider>
              <GraphProvider>
                <Web3Provider>
                  
                  <DataBaseProvider>
                    <ChakraProvider theme={theme}>
                      <NetworkModalControl />  
                      <Component {...pageProps} />
                    </ChakraProvider>
                  </DataBaseProvider>
                </Web3Provider>
              </GraphProvider>
            </ProfileHubProvider>
          </IPFSprovider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;

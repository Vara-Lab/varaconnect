const isVite = typeof import.meta !== "undefined" && typeof import.meta.env !== "undefined";

const getEnv = (key: string): string | undefined => {
  if (isVite) {
    return (
      import.meta.env[`VITE_${key}`] ||
      import.meta.env[`NEXT_PUBLIC_${key}`] ||
      import.meta.env[key]
    );
  }

  switch (key) {
    case "PROJECT_ID":
      return process.env.NEXT_PUBLIC_PROJECT_ID;
    case "NODE_ADDRESS":
      return process.env.NEXT_PUBLIC_NODE_ADDRESS;
    case "NETWORK":
      return process.env.NEXT_PUBLIC_NETWORK || process.env.NETWORK;
    default:
      return (
        process.env[`VITE_${key}`] ||
        process.env[`NEXT_PUBLIC_${key}`] ||
        process.env[key]
      );
  }
};

function requireEnv(key: string): string {
  const value = getEnv(key);
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}


const NETWORK = getEnv("NETWORK") || "mainnet";

export const projectId = requireEnv("PROJECT_ID"); 
export const DOMAIN_URL = requireEnv("NODE_ADDRESS"); 

const CAIP_IDS = {
  mainnet: "polkadot:fe1b4c55fd4d668101126434206571a7", // Vara Mainnet
  testnet: "polkadot:525639f713f397dcf839bd022cd821f3", // Vara Testnet
};

export const CAIP_ID_MAP = {
  vara: CAIP_IDS[NETWORK as keyof typeof CAIP_IDS],
};

export const walletConnectParams = {
  projectId,
  relayUrl: "wss://relay.walletconnect.com",
  metadata: {
    name: `vara (${NETWORK})`,
    description: `vara SDK (${NETWORK})`,
    url: DOMAIN_URL,
    icons: ["https://walletconnect.com/walletconnect-logo.png"],
  },
};

export const namespaces = {
  polkadot: {
    methods: ["polkadot_signTransaction", "polkadot_signMessage"],
    chains: Object.values(CAIP_ID_MAP),
    events: ["accountsChanged", "disconnect"],
  },
};

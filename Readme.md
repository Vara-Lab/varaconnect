# VaraConnect SDK

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**VaraConnect** is a powerful SDK designed to simplify the integration of **WalletConnect** with the **Vara Network** (a Substrate-based blockchain). This library enables developers to easily connect, sign, and send transactions through WalletConnect, allowing for a seamless user experience when interacting with decentralized applications (dApps) on the Vara network.

Whether you're building DeFi solutions, NFTs, or any blockchain-based dApp, this library provides an easy-to-use API to securely interact with users' wallets.

## Features

- **Easy Integration with WalletConnect**: Quickly connect with users' wallets using WalletConnect for signing and sending transactions on the Vara Network.
- **Transaction Signing**: Enables users to sign payloads and submit transactions to the Vara Network.
- **Support for Custom Transactions**: Allows developers to create and send custom extrinsics.
- **Modular Design**: Clear separation between connection management, transaction signing, and status tracking.

## Getting Started

To get started with the **VaraConnect SDK**, follow the instructions below for installation and setup.

---

## Prerequisites

Before installing `varaconnect`, ensure that your project uses:

- **Node.js 16+**
- **React** (if used in frontend)
- A bundler/framework like **Vite**, **Next.js**, or **Webpack**

---

## Installation

Install the SDK using Yarn or npm:

```bash
yarn add varaconnect
# o
npm install varaconnect
```

## Environment Configuration

VaraConnect uses environment variables for configuration. These variables can be defined in a .env file at the root of your project.

Example .env file (cross-framework support)

```jsx
# For Vite
VITE_PROJECT_ID=your_walletconnect_project_id
VITE_NODE_ADDRESS=wss://rpc.vara.network  # or wss://testnet.vara.network
VITE_NETWORK=mainnet  # or testnet

# For Next.js
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_NODE_ADDRESS=wss://rpc.vara.network # or wss://testnet.vara.network
NEXT_PUBLIC_NETWORK=mainnet  # or testnet

# For Astro / Remix (SPA usage with frontend access)
PROJECT_ID=your_walletconnect_project_id
NODE_ADDRESS=wss://rpc.vara.network # or wss://testnet.vara.network
NETWORK=mainnet # or testnet
```


## 🔗 WalletConnect Integration

This SDK integrates [WalletConnect](https://walletconnect.com/) to enable secure wallet connections in Vara-based applications.

**WalletConnect** is an open protocol that allows wallets and dApps to securely communicate. VaraConnect uses it to facilitate actions like connecting wallets, signing messages, and sending transactions.

> **Note:** WalletConnect is an open source protocol licensed under the [MIT License](https://github.com/WalletConnect/walletconnect-monorepo/blob/main/LICENSE).
>
> VaraConnect leverages WalletConnect v2 under the hood to provide seamless wallet interoperability.


## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these guidelines:

1. **Fork the Repository**:  
   Click on the "Fork" button at the top of this repository to create your own copy.

2. **Create a Feature Branch**:  
   Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Submit a Pull Request**:  
   Once your changes are ready, submit a pull request to the `main` branch. Be sure to include a detailed description of your changes and the problem they solve.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# React AR Wallet

A simple and reusable Arweave Wallet component for React

![screenshot](docs/screenshot.png)


<img alt="openbits" src="https://lh3.googleusercontent.com/WlvrVlYFZOZyldoMXt5AUgbpJX-goOW-cReBV3DguDZds6If71LGvTrQFisRn2M1dAQfY-2YunY0cqKlzARar4gN4w5NgTn5Jr-cTd48QziPm5uLDJwx939t9EA4JASZuhj_14YD" width="42"> This package is also served through openbits https://openbits.world

## Installation

The package can be installed via [openbits](https://openbits.world)

```
openbits install react-ar-wallet
```

Or via [npm](https://github.com/npm/cli):

```
npm install react-ar-wallet --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add react-ar-wallet
```

You’ll need to install React separately since those dependencies aren’t included in the package. 

```js
import React, { useState } from "react";
import ArWallet from "react-ar-wallet";

const Example = () => {
  const [wallet, setWallet] = useState('3oDgWphQ0m6D5lIBaN9ebDIdznwsH6J-0kT04dpBWiQ');
  return (
    <ArWallet wallet={wallet} />
  );
};
```

## Configuration

The most basic use of the react-ar-wallet can be described with:

```js
<ArWallet wallet={wallet} />
```



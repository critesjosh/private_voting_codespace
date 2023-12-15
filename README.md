# Private Voting Example Codespace

Get and run the sandbox with this command:

```bash
/bin/bash -c "$(curl -fsSL 'https://sandbox.aztec.network')"
```
## Compile

```bash
aztec-cli compile .
```

## Deploy

Add `ADMIN` to your environment.

```bash
ADMIN=0x1d30d4de97657983408587c7a91ba6587774b30f0e70224a0658f0357092f495
```

```bash
aztec-cli deploy ./target/Voting.json --args $ADMIN
```

## Error resoultion

## Update Contract

Get the contract code from the monorepo. Specify the version to get at the top of the script.

```bash
./update_contract.sh
```

You may need to update permissions with:

```bash
chmod +x update_contract.sh
```

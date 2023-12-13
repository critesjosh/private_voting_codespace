# Private Voting Example Codespace


Run:

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
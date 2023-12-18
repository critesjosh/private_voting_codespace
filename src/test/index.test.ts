import { EasyPrivateVotingContractArtifact } from "../artifacts/EasyPrivateVoting.js"
import { AccountWallet, CompleteAddress, Contract, DeployMethod, Fr, PXE, createAccount, createPXEClient, getSandboxAccountsWallets, waitForSandbox } from "@aztec/aztec.js";

const setupSandbox = async () => {
    const { PXE_URL = 'http://localhost:8080' } = process.env;
    const pxe = createPXEClient(PXE_URL);
    await waitForSandbox(pxe);
    return pxe;
};

describe("Voting", () => {
    let pxe: PXE;
    let accounts: CompleteAddress[] = [];


    beforeAll(async () => {
        pxe = await setupSandbox();

        const accountWallets: AccountWallet[] = await getSandboxAccountsWallets(pxe);
        accounts = accountWallets.map(a => a.getCompleteAddress())
    })

    it("Deploys the contract", async () => {
        const salt = Fr.random();

        const tx = new DeployMethod(accounts[0].publicKey, pxe, EasyPrivateVotingContractArtifact, [accounts[0].address]).send({
            contractAddressSalt: salt,
        });
        await tx.wait();
        const receipt = await tx.getReceipt();

        console.log("receipt", receipt)
    })

});
// Required imports
const { ApiPromise, WsProvider } = require('@polkadot/api');

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main() {
    // Initialise the provider to connect to the local node
    const provider = new WsProvider('ws://127.0.0.1:9944');
    const types = {
        Company: {

        },
        Dose: {

        },
        Dosimeter: {

        },
        LicenceNumber: {

        },
        Operator: {

        },
        SerialNumber: {},
        Timestamp: {},
    }

    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider, types });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
    ]);

    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

    // Make our basic chain state/storage queries, all in one go
    const account = await api.query.system.account(ALICE)
    console.log(account)


    // if (validators && validators.length > 0) {
    //     // Retrieve the balances for all validators
    //     const validatorBalances = await Promise.all(
    //         validators.map((authorityId) =>
    //             api.query.system.account(authorityId)
    //         )
    //     );

    //     // Print out the authorityIds and balances of all validators
    //     console.log('validators', validators.map((authorityId, index) => ({
    //         address: authorityId.toString(),
    //         balance: validatorBalances[index].data.free.toHuman(),
    //         nonce: validatorBalances[index].nonce.toHuman()
    //     })));
    // }

}

main().catch(console.error).finally(() => process.exit());
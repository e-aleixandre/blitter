async function main() {
    const Blitter = await ethers.getContractFactory('Blitter');
    console.log('Deploying Blitter...');
    const blitter = await Blitter.deploy();
    await blitter.deployed();
    console.log('Blitter deployed with address', blitter.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
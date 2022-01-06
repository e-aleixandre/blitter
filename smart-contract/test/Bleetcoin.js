const {expect} = require('chai');

describe('Token contract', () => {
    let Token, token, owner, addr1, addr2;

    beforeEach(async () => {
        Token = await ethers.getContractFactory('Bleetcoin');
        token = await Token.deploy(
            "Bleetcoin",
            "BTC",
            "100000000000000000000000000"
        );
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });

    describe('Deployment', () => {
        it('Should set the right owner', async () => {
            expect(await token.owner()).to.equal(owner.address);
        });

        it('Should assign the total supply to the owner', async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe('Transactions', () => {
        it('Should transfer tokens between accounts', async () => {
            await token.transfer(addr1.address, 50);
            let addr1Balance = await token.balanceOf(addr1.address);

            expect(addr1Balance).to.equal(50);

            await token.connect(addr1).transfer(addr2.address, 50);
            addr1Balance = await token.balanceOf(addr1.address);
            const addr2Balance = await token.balanceOf(addr2.address);

            expect(addr1Balance).to.equal(0);
            expect(addr2Balance).to.equal(50);
        });

        it('Should fail if sender doesn\'t have enough tokens', async () => {
            await expect(
                token.connect(addr1).transfer(addr2.address, 50)
            ).to.be.reverted;
        });
    })
});
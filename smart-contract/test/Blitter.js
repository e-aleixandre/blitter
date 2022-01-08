const {expect} = require('chai');

describe('Blitter contract', () => {
    let Blitter, blitter, owner, addr1, addr2;
    
    beforeEach(async () => {
        Blitter = await ethers.getContractFactory('Blitter');
        blitter = await Blitter.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });

    describe('Deployment', () => {
        it('Should set the right owner', async () => {
            expect(await blitter.owner()).to.equal(owner.address);
        });
    });

    describe('Interaction', () => {
        it('Should set the username correctly', async () => {
            const newName = "TestName";
            await blitter.setUsername(ethers.utils.formatBytes32String(newName));
            const currentName = await blitter.usernames(owner.address);

            expect(ethers.utils.parseBytes32String(currentName)).to.equal(newName);
        });

        it('Should emit UsernameChanged event only if a username was already set', async () => {
            const firstName = "TestName";
            expect(await blitter.setUsername(ethers.utils.formatBytes32String(firstName)))
                .to.not.emit(blitter, 'UsernameChanged');
            
            const newName = "OtherName";

            expect(await blitter.setUsername(ethers.utils.formatBytes32String(newName)))
                .to.emit(blitter, 'UsernameChanged')
                .withArgs(owner.address, ethers.utils.formatBytes32String(firstName), ethers.utils.formatBytes32String(newName));
        });

        it('Should push bleet to bleets array', async () => {
            const content = "This is the content of the Bleet, which should be ok";
            const bleet = {
                hashtags: [],
                gif: ethers.utils.formatBytes32String('loool'),
                content: ethers.utils.toUtf8Bytes(content)
            };

            const currentBleets = await blitter.getBleets();
            expect(currentBleets.length).to.equal(0);
            await blitter.newBleet(bleet.hashtags, bleet.gif, bleet.content);
            const bleetsAfterNewBleet = await blitter.getBleets();
            expect(bleetsAfterNewBleet.length).to.equal(1);
        });
    });
});
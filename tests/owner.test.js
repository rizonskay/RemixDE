import { expect } from "chai";
import { ethers } from "hardhat";

describe("Owner", function () {
    it("test contract owner", async function () {
        const [acc_0] = await ethers.getSigners();
        const Owner = await ethers.getContractFactory("Owner");
        const owner = await Owner.deploy();
        await owner.deployed();
        expect(await owner.getOwner()).to.equal(acc_0.address);
    });

    it("test change owner", async function () {
        const [acc_0, acc_1] = await ethers.getSigners();
        const Owner = await ethers.getContractFactory("Owner");
        const owner = await Owner.deploy();
        await owner.deployed();
        await owner.changeOwner(acc_1.address);
        expect(await owner.getOwner()).to.equal(acc_1.address);
    });
});

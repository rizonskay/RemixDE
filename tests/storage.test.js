import { expect } from "chai";
import { ethers } from "hardhat";

describe("Storage", function () {
    it("test initial value", async function () {
        const Storage = await ethers.getContractFactory("Storage");
        const storage = await Storage.deploy();
        await storage.deployed();
        expect((await storage.retrieve()).toNumber()).to.equal(0);
    });

    it("test updating and retrieving updated value", async function () {
        const Storage = await ethers.getContractFactory("Storage");
        const storage = await Storage.deploy();
        await storage.deployed();
        await storage.store(56);
        expect((await storage.retrieve()).toNumber()).to.equal(56);
    });
});

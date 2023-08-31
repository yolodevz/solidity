import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello", () => {
    it("should get: Hello, World!", async () => {
        const Hello = await ethers.getContractFactory("Hello");
        const helloContract = await Hello.deploy();
        await helloContract.deployed();

        const hello = await helloContract.hello();
        expect(await hello).to.equal("Hello, World!");
    });
});
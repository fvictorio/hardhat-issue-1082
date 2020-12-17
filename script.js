async function main() {
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();

  await test.deployed();

  console.log(await test.recordExists("0xf1571b4d4a4426692928f2fb2eb48872209fb7daec3f31b4d47ab698aeaf51fb"));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

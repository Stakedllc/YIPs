module.exports = {
  compilers: {
    solc: {
      version: "0.4.25",
    },
  },
  solc: {
       optimizer: {
           enabled: true,
           runs: 200
       }
   },
	contracts_directory: "../contracts",
};

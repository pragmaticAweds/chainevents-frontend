export const connectWallet = async (dispatch, connect) => {
  try {
    const connection = await connect();
    if (connection && connection.isConnected) {
      const { selectedAddress: address, account } = connection;
      dispatch({
        type: "connectWallet",
        payload: { connection, address, account },
      });

      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const disconnectWallet = async (dispatch, disconnect) => {
  try {
    await disconnect();
    dispatch({
      type: "disconnectWallet",
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

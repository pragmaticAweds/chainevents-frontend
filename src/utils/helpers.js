import {
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useMemo } from "react";

export const formatDisplayDate = (dateString, short = false) => {
  const date = new Date(dateString.replace(/\//g, "-")); // Convert to "2024-10-25"
  if (!isNaN(date.getTime())) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: short ? undefined : "long",
      month: short ? "short" : "long",
      day: "numeric",
    }).format(date);
  }
};

export const formatTimeWithAmPm = (time) => {
  return `${time} ${time.split(":")[0] > 11 ? "PM" : "AM"}`;
};

export function useContractFetch(abi, functionName, address, args) {
  const { data, isLoading, refetch, isFetching, error } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: address,
    args: args,
  });

  return { data, isLoading, refetch, isFetching, error };
}

export function useContractWriteUtility(
  functionName,
  args,
  abi,
  contract_address
) {
  const { contract } = useContract({ abi, address: contract_address });

  const calls = useMemo(() => {
    if (
      !contract ||
      !args ||
      args.some((arg) => arg === undefined || arg === null)
    ) {
      return undefined;
    }

    return [contract.populate(functionName, args)];
  }, [contract, functionName, args]);

  const {
    sendAsync: writeAsync,
    data: writeData,
    isPending: writeIsPending,
    error,
  } = useSendTransaction({ calls });

  const {
    isLoading: waitIsLoading,
    data: waitData,
    isSuccess,
  } = useTransactionReceipt({
    hash: writeData?.transaction_hash,
    watch: true,
  });

  return {
    writeAsync,
    writeData,
    writeIsPending,
    waitIsLoading,
    waitData,
    calls,
    error,
    isSuccess,
  };
}

/**
 * Utility function to handle promises with a try-catch pattern
 * Returns a tuple with [data, error] where one value will always be null
 *
 * @param {Promise<any>} promise - The promise to be handled
 * @returns {Promise<[any|null, Error|null]>} - Returns [data, null] on success or [null, error] on failure
 *
 * @example
 * // Success case
 * const [data, error] = await tryCatch(api.fetchData());
 * if (data) {
 *   // Handle success
 * }
 *
 * @example
 * // Error case
 * const [data, error] = await tryCatch(api.fetchData());
 * if (error) {
 *   // Handle error
 * }
 */

export async function tryCatch(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

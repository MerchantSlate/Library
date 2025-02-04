import { ChainIds, EVMAddress, ErrorResponse, ResultPromise, StringObj, TransactionResponse } from "../types";
declare const 
/** Selected Chain */
selectedChain: ChainIds, setSelectedChain: (chain: ChainIds) => void, 
/** Zero Address */
ZERO_ADDRESS: EVMAddress, 
/** Contract Messages */
contractErrors: StringObj, 
/** Process Transaction Hash */
processTxHash: (tx: TransactionResponse) => ResultPromise<string>, 
/** Contract Error Response Processing */
errorResponse: (error: any) => ErrorResponse;
export { selectedChain, setSelectedChain, ZERO_ADDRESS, contractErrors, processTxHash, errorResponse, };

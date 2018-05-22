// #9 Creating a Block part Three
import * as CryptoJS from "crypto-js"

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string): string => 
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number) {
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
  }
}


const genesisBlock:Block = new Block(0, "20202020202020", "", "Hello", 123456)

let blockchain: [Block] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;
const getLatestBlock = () : Block => blockchain[blockchain.length - 1];
const getNewTImeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string): Block => {
  const previousBlock : Block = getLatestBlock();
  const newIndex : number = previousBlock.index + 1;
  const newTimeStamp : number = getNewTImeStamp();
  const newHash : string = Block.calculateBlockHash(
    newIndex, 
    previousBlock.hash,
    newTimeStamp,
    data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    return newBlock;
}
console.log(createNewBlock("hello"), createNewBlock("bye bye"));



export {};


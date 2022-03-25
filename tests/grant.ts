import assert from 'assert'
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Questbook as QuestbookInterface } from "../target/types/questbook";
import Questbook from '../app/lib/questbook-solana'

describe("grant", () => {
  const provider = anchor.Provider.env()
  anchor.setProvider(provider)

  const program = anchor.workspace.Questbook as Program<QuestbookInterface>;
  const questbook = new Questbook(program, provider)
  let w1: any
  let w1Admin = anchor.web3.Keypair.generate()

  it('creates a new grant in workspace', async () => {
    w1 = await questbook.rpcCreateWorkspace("https://ipfs.io/1", "a@b.com", w1Admin)
    const grant = await questbook.rpcCreateGrant(0, "ipfs.io/2", w1, w1Admin)

    const grantState = await questbook.getGrantState(grant)
    assert.equal(grantState.workspace.toString(), w1.toString())
    assert.equal(grantState.metadataHash, "ipfs.io/2")
    assert.equal(grantState.active, true)
  })
});
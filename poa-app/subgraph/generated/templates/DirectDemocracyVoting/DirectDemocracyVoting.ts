// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ElectionContractSet extends ethereum.Event {
  get params(): ElectionContractSet__Params {
    return new ElectionContractSet__Params(this);
  }
}

export class ElectionContractSet__Params {
  _event: ElectionContractSet;

  constructor(event: ElectionContractSet) {
    this._event = event;
  }

  get electionContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewProposal extends ethereum.Event {
  get params(): NewProposal__Params {
    return new NewProposal__Params(this);
  }
}

export class NewProposal__Params {
  _event: NewProposal;

  constructor(event: NewProposal) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get timeInMinutes(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get creationTimestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get transferTriggerOptionIndex(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get transferRecipient(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get transferAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get transferEnabled(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }

  get transferToken(): Address {
    return this._event.parameters[9].value.toAddress();
  }

  get electionEnabled(): boolean {
    return this._event.parameters[10].value.toBoolean();
  }

  get electionId(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }
}

export class PollOptionNames extends ethereum.Event {
  get params(): PollOptionNames__Params {
    return new PollOptionNames__Params(this);
  }
}

export class PollOptionNames__Params {
  _event: PollOptionNames;

  constructor(event: PollOptionNames) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get optionIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get optionIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WinnerAnnounced extends ethereum.Event {
  get params(): WinnerAnnounced__Params {
    return new WinnerAnnounced__Params(this);
  }
}

export class WinnerAnnounced__Params {
  _event: WinnerAnnounced;

  constructor(event: WinnerAnnounced) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winningOptionIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get hasValidWinner(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class DirectDemocracyVoting__announceWinnerResult {
  value0: BigInt;
  value1: boolean;

  constructor(value0: BigInt, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): boolean {
    return this.value1;
  }
}

export class DirectDemocracyVoting__getProposalResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: boolean;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: boolean,
    value7: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getTotalVotes(): BigInt {
    return this.value0;
  }

  getTimeInMinutes(): BigInt {
    return this.value1;
  }

  getCreationTimestamp(): BigInt {
    return this.value2;
  }

  getTransferTriggerOptionIndex(): BigInt {
    return this.value3;
  }

  getTransferRecipient(): Address {
    return this.value4;
  }

  getTransferAmount(): BigInt {
    return this.value5;
  }

  getTransferEnabled(): boolean {
    return this.value6;
  }

  getTransferToken(): Address {
    return this.value7;
  }
}

export class DirectDemocracyVoting__getWinnerResult {
  value0: BigInt;
  value1: boolean;

  constructor(value0: BigInt, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): boolean {
    return this.value1;
  }
}

export class DirectDemocracyVoting extends ethereum.SmartContract {
  static bind(address: Address): DirectDemocracyVoting {
    return new DirectDemocracyVoting("DirectDemocracyVoting", address);
  }

  DirectDemocracyToken(): Address {
    let result = super.call(
      "DirectDemocracyToken",
      "DirectDemocracyToken():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_DirectDemocracyToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "DirectDemocracyToken",
      "DirectDemocracyToken():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  announceWinner(
    _proposalId: BigInt,
  ): DirectDemocracyVoting__announceWinnerResult {
    let result = super.call(
      "announceWinner",
      "announceWinner(uint256):(uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return new DirectDemocracyVoting__announceWinnerResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
    );
  }

  try_announceWinner(
    _proposalId: BigInt,
  ): ethereum.CallResult<DirectDemocracyVoting__announceWinnerResult> {
    let result = super.tryCall(
      "announceWinner",
      "announceWinner(uint256):(uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DirectDemocracyVoting__announceWinnerResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
      ),
    );
  }

  elections(): Address {
    let result = super.call("elections", "elections():(address)", []);

    return result[0].toAddress();
  }

  try_elections(): ethereum.CallResult<Address> {
    let result = super.tryCall("elections", "elections():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOptionVotes(_proposalId: BigInt, _optionIndex: BigInt): BigInt {
    let result = super.call(
      "getOptionVotes",
      "getOptionVotes(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromUnsignedBigInt(_optionIndex),
      ],
    );

    return result[0].toBigInt();
  }

  try_getOptionVotes(
    _proposalId: BigInt,
    _optionIndex: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOptionVotes",
      "getOptionVotes(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromUnsignedBigInt(_optionIndex),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOptionsCount(_proposalId: BigInt): BigInt {
    let result = super.call(
      "getOptionsCount",
      "getOptionsCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return result[0].toBigInt();
  }

  try_getOptionsCount(_proposalId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOptionsCount",
      "getOptionsCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProposal(_proposalId: BigInt): DirectDemocracyVoting__getProposalResult {
    let result = super.call(
      "getProposal",
      "getProposal(uint256):(uint256,uint256,uint256,uint256,address,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );

    return new DirectDemocracyVoting__getProposalResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toAddress(),
    );
  }

  try_getProposal(
    _proposalId: BigInt,
  ): ethereum.CallResult<DirectDemocracyVoting__getProposalResult> {
    let result = super.tryCall(
      "getProposal",
      "getProposal(uint256):(uint256,uint256,uint256,uint256,address,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DirectDemocracyVoting__getProposalResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toAddress(),
      ),
    );
  }

  getProposalOptionVotes(_proposalId: BigInt, _optionIndex: BigInt): BigInt {
    let result = super.call(
      "getProposalOptionVotes",
      "getProposalOptionVotes(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromUnsignedBigInt(_optionIndex),
      ],
    );

    return result[0].toBigInt();
  }

  try_getProposalOptionVotes(
    _proposalId: BigInt,
    _optionIndex: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProposalOptionVotes",
      "getProposalOptionVotes(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromUnsignedBigInt(_optionIndex),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProposalsCount(): BigInt {
    let result = super.call(
      "getProposalsCount",
      "getProposalsCount():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getProposalsCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProposalsCount",
      "getProposalsCount():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWinner(_proposalId: BigInt): DirectDemocracyVoting__getWinnerResult {
    let result = super.call("getWinner", "getWinner(uint256):(uint256,bool)", [
      ethereum.Value.fromUnsignedBigInt(_proposalId),
    ]);

    return new DirectDemocracyVoting__getWinnerResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
    );
  }

  try_getWinner(
    _proposalId: BigInt,
  ): ethereum.CallResult<DirectDemocracyVoting__getWinnerResult> {
    let result = super.tryCall(
      "getWinner",
      "getWinner(uint256):(uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DirectDemocracyVoting__getWinnerResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
      ),
    );
  }

  nftMembership(): Address {
    let result = super.call("nftMembership", "nftMembership():(address)", []);

    return result[0].toAddress();
  }

  try_nftMembership(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nftMembership",
      "nftMembership():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  quorumPercentage(): BigInt {
    let result = super.call(
      "quorumPercentage",
      "quorumPercentage():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_quorumPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "quorumPercentage",
      "quorumPercentage():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ddToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftMembership(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _allowedRoleNames(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _treasuryAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _quorumPercentage(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AnnounceWinnerCall extends ethereum.Call {
  get inputs(): AnnounceWinnerCall__Inputs {
    return new AnnounceWinnerCall__Inputs(this);
  }

  get outputs(): AnnounceWinnerCall__Outputs {
    return new AnnounceWinnerCall__Outputs(this);
  }
}

export class AnnounceWinnerCall__Inputs {
  _call: AnnounceWinnerCall;

  constructor(call: AnnounceWinnerCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AnnounceWinnerCall__Outputs {
  _call: AnnounceWinnerCall;

  constructor(call: AnnounceWinnerCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get value1(): boolean {
    return this._call.outputValues[1].value.toBoolean();
  }
}

export class CreateProposalCall extends ethereum.Call {
  get inputs(): CreateProposalCall__Inputs {
    return new CreateProposalCall__Inputs(this);
  }

  get outputs(): CreateProposalCall__Outputs {
    return new CreateProposalCall__Outputs(this);
  }
}

export class CreateProposalCall__Inputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _timeInMinutes(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _optionNames(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get _transferTriggerOptionIndex(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _transferRecipient(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _transferAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _transferEnabled(): boolean {
    return this._call.inputValues[7].value.toBoolean();
  }

  get _transferToken(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get _electionEnabled(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }

  get _candidateAddresses(): Array<Address> {
    return this._call.inputValues[10].value.toAddressArray();
  }

  get _candidateNames(): Array<string> {
    return this._call.inputValues[11].value.toStringArray();
  }
}

export class CreateProposalCall__Outputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }
}

export class SetElectionsContractCall extends ethereum.Call {
  get inputs(): SetElectionsContractCall__Inputs {
    return new SetElectionsContractCall__Inputs(this);
  }

  get outputs(): SetElectionsContractCall__Outputs {
    return new SetElectionsContractCall__Outputs(this);
  }
}

export class SetElectionsContractCall__Inputs {
  _call: SetElectionsContractCall;

  constructor(call: SetElectionsContractCall) {
    this._call = call;
  }

  get _electionsContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetElectionsContractCall__Outputs {
  _call: SetElectionsContractCall;

  constructor(call: SetElectionsContractCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _voter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _optionIndex(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}

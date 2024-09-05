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

export class VotingContractCreated extends ethereum.Event {
  get params(): VotingContractCreated__Params {
    return new VotingContractCreated__Params(this);
  }
}

export class VotingContractCreated__Params {
  _event: VotingContractCreated;

  constructor(event: VotingContractCreated) {
    this._event = event;
  }

  get votingContractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get POname(): string {
    return this._event.parameters[1].value.toString();
  }

  get quorumPercentage(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ParticipationVotingFactory extends ethereum.SmartContract {
  static bind(address: Address): ParticipationVotingFactory {
    return new ParticipationVotingFactory(
      "ParticipationVotingFactory",
      address,
    );
  }

  createParticipationVoting(
    _ParticipationToken: Address,
    _nftMembership: Address,
    _allowedRoleNames: Array<string>,
    _quadraticVotingEnabled: boolean,
    _treasuryAddress: Address,
    POname: string,
    _quorumPercentage: BigInt,
  ): Address {
    let result = super.call(
      "createParticipationVoting",
      "createParticipationVoting(address,address,string[],bool,address,string,uint256):(address)",
      [
        ethereum.Value.fromAddress(_ParticipationToken),
        ethereum.Value.fromAddress(_nftMembership),
        ethereum.Value.fromStringArray(_allowedRoleNames),
        ethereum.Value.fromBoolean(_quadraticVotingEnabled),
        ethereum.Value.fromAddress(_treasuryAddress),
        ethereum.Value.fromString(POname),
        ethereum.Value.fromUnsignedBigInt(_quorumPercentage),
      ],
    );

    return result[0].toAddress();
  }

  try_createParticipationVoting(
    _ParticipationToken: Address,
    _nftMembership: Address,
    _allowedRoleNames: Array<string>,
    _quadraticVotingEnabled: boolean,
    _treasuryAddress: Address,
    POname: string,
    _quorumPercentage: BigInt,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createParticipationVoting",
      "createParticipationVoting(address,address,string[],bool,address,string,uint256):(address)",
      [
        ethereum.Value.fromAddress(_ParticipationToken),
        ethereum.Value.fromAddress(_nftMembership),
        ethereum.Value.fromStringArray(_allowedRoleNames),
        ethereum.Value.fromBoolean(_quadraticVotingEnabled),
        ethereum.Value.fromAddress(_treasuryAddress),
        ethereum.Value.fromString(POname),
        ethereum.Value.fromUnsignedBigInt(_quorumPercentage),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateParticipationVotingCall extends ethereum.Call {
  get inputs(): CreateParticipationVotingCall__Inputs {
    return new CreateParticipationVotingCall__Inputs(this);
  }

  get outputs(): CreateParticipationVotingCall__Outputs {
    return new CreateParticipationVotingCall__Outputs(this);
  }
}

export class CreateParticipationVotingCall__Inputs {
  _call: CreateParticipationVotingCall;

  constructor(call: CreateParticipationVotingCall) {
    this._call = call;
  }

  get _ParticipationToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftMembership(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _allowedRoleNames(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _quadraticVotingEnabled(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _treasuryAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get POname(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _quorumPercentage(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class CreateParticipationVotingCall__Outputs {
  _call: CreateParticipationVotingCall;

  constructor(call: CreateParticipationVotingCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TaskManagerCreated extends ethereum.Event {
  get params(): TaskManagerCreated__Params {
    return new TaskManagerCreated__Params(this);
  }
}

export class TaskManagerCreated__Params {
  _event: TaskManagerCreated;

  constructor(event: TaskManagerCreated) {
    this._event = event;
  }

  get TaskManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get POname(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class TaskManagerFactory extends ethereum.SmartContract {
  static bind(address: Address): TaskManagerFactory {
    return new TaskManagerFactory("TaskManagerFactory", address);
  }

  createTaskManager(
    _token: Address,
    _nftMembership: Address,
    _allowedRoleNames: Array<string>,
    POname: string
  ): Address {
    let result = super.call(
      "createTaskManager",
      "createTaskManager(address,address,string[],string):(address)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_nftMembership),
        ethereum.Value.fromStringArray(_allowedRoleNames),
        ethereum.Value.fromString(POname)
      ]
    );

    return result[0].toAddress();
  }

  try_createTaskManager(
    _token: Address,
    _nftMembership: Address,
    _allowedRoleNames: Array<string>,
    POname: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createTaskManager",
      "createTaskManager(address,address,string[],string):(address)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_nftMembership),
        ethereum.Value.fromStringArray(_allowedRoleNames),
        ethereum.Value.fromString(POname)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateTaskManagerCall extends ethereum.Call {
  get inputs(): CreateTaskManagerCall__Inputs {
    return new CreateTaskManagerCall__Inputs(this);
  }

  get outputs(): CreateTaskManagerCall__Outputs {
    return new CreateTaskManagerCall__Outputs(this);
  }
}

export class CreateTaskManagerCall__Inputs {
  _call: CreateTaskManagerCall;

  constructor(call: CreateTaskManagerCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftMembership(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _allowedRoleNames(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get POname(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateTaskManagerCall__Outputs {
  _call: CreateTaskManagerCall;

  constructor(call: CreateTaskManagerCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

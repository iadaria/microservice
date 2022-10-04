/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "aw.auth";

export interface CreateRequest {
  email: string;
  /** some random string containing password */
  password: string;
}

export interface CreateResponse {
  id: string;
  email: string;
  isBlocked: boolean;
}

export interface LoginRequest {
  email: string;
  /** some random string containing password */
  password: string;
}

export interface LoginResponse {
  token: string;
  /** Default is Bearer */
  tokenType?: string | undefined;
  expiresIn?: number | undefined;
  refreshToken: string;
}

export interface ValidateTokenRequest {
  token: string;
}

export interface ValidateTokenResponse {
  valid: boolean;
}

export interface RefreshTokenRequest {
  oldToken: string;
  refreshToken: string;
  clientId?: string | undefined;
  userIp?: string | undefined;
}

export interface RefreshTokenResponse {
  token: string;
  /** Default is Bearer */
  tokenType?: string | undefined;
  expiresIn?: number | undefined;
  refreshToken: string;
}

function createBaseCreateRequest(): CreateRequest {
  return { email: "", password: "" };
}

export const CreateRequest = {
  encode(message: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: CreateRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateRequest>, I>>(object: I): CreateRequest {
    const message = createBaseCreateRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { id: "", email: "", isBlocked: false };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.isBlocked === true) {
      writer.uint32(24).bool(message.isBlocked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.isBlocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      email: isSet(object.email) ? String(object.email) : "",
      isBlocked: isSet(object.isBlocked) ? Boolean(object.isBlocked) : false,
    };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    message.isBlocked !== undefined && (obj.isBlocked = message.isBlocked);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateResponse>, I>>(object: I): CreateResponse {
    const message = createBaseCreateResponse();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    message.isBlocked = object.isBlocked ?? false;
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { email: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { token: "", tokenType: undefined, expiresIn: undefined, refreshToken: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.tokenType !== undefined) {
      writer.uint32(18).string(message.tokenType);
    }
    if (message.expiresIn !== undefined) {
      writer.uint32(24).int32(message.expiresIn);
    }
    if (message.refreshToken !== "") {
      writer.uint32(34).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        case 3:
          message.expiresIn = reader.int32();
          break;
        case 4:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : undefined,
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : undefined,
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.expiresIn !== undefined && (obj.expiresIn = Math.round(message.expiresIn));
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.token = object.token ?? "";
    message.tokenType = object.tokenType ?? undefined;
    message.expiresIn = object.expiresIn ?? undefined;
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseValidateTokenRequest(): ValidateTokenRequest {
  return { token: "" };
}

export const ValidateTokenRequest = {
  encode(message: ValidateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateTokenRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: ValidateTokenRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidateTokenRequest>, I>>(object: I): ValidateTokenRequest {
    const message = createBaseValidateTokenRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseValidateTokenResponse(): ValidateTokenResponse {
  return { valid: false };
}

export const ValidateTokenResponse = {
  encode(message: ValidateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateTokenResponse {
    return { valid: isSet(object.valid) ? Boolean(object.valid) : false };
  },

  toJSON(message: ValidateTokenResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidateTokenResponse>, I>>(object: I): ValidateTokenResponse {
    const message = createBaseValidateTokenResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseRefreshTokenRequest(): RefreshTokenRequest {
  return { oldToken: "", refreshToken: "", clientId: undefined, userIp: undefined };
}

export const RefreshTokenRequest = {
  encode(message: RefreshTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldToken !== "") {
      writer.uint32(10).string(message.oldToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.clientId !== undefined) {
      writer.uint32(26).string(message.clientId);
    }
    if (message.userIp !== undefined) {
      writer.uint32(34).string(message.userIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oldToken = reader.string();
          break;
        case 2:
          message.refreshToken = reader.string();
          break;
        case 3:
          message.clientId = reader.string();
          break;
        case 4:
          message.userIp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshTokenRequest {
    return {
      oldToken: isSet(object.oldToken) ? String(object.oldToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : undefined,
      userIp: isSet(object.userIp) ? String(object.userIp) : undefined,
    };
  },

  toJSON(message: RefreshTokenRequest): unknown {
    const obj: any = {};
    message.oldToken !== undefined && (obj.oldToken = message.oldToken);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.userIp !== undefined && (obj.userIp = message.userIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefreshTokenRequest>, I>>(object: I): RefreshTokenRequest {
    const message = createBaseRefreshTokenRequest();
    message.oldToken = object.oldToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.clientId = object.clientId ?? undefined;
    message.userIp = object.userIp ?? undefined;
    return message;
  },
};

function createBaseRefreshTokenResponse(): RefreshTokenResponse {
  return { token: "", tokenType: undefined, expiresIn: undefined, refreshToken: "" };
}

export const RefreshTokenResponse = {
  encode(message: RefreshTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.tokenType !== undefined) {
      writer.uint32(18).string(message.tokenType);
    }
    if (message.expiresIn !== undefined) {
      writer.uint32(24).int32(message.expiresIn);
    }
    if (message.refreshToken !== "") {
      writer.uint32(34).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.tokenType = reader.string();
          break;
        case 3:
          message.expiresIn = reader.int32();
          break;
        case 4:
          message.refreshToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshTokenResponse {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : undefined,
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : undefined,
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: RefreshTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.expiresIn !== undefined && (obj.expiresIn = Math.round(message.expiresIn));
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefreshTokenResponse>, I>>(object: I): RefreshTokenResponse {
    const message = createBaseRefreshTokenResponse();
    message.token = object.token ?? "";
    message.tokenType = object.tokenType ?? undefined;
    message.expiresIn = object.expiresIn ?? undefined;
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

export interface AccountService<Context extends DataLoaders> {
  Create(ctx: Context, request: CreateRequest): Observable<CreateResponse>;
  Login(ctx: Context, request: LoginRequest): Observable<LoginResponse>;
  ValidateToken(ctx: Context, request: ValidateTokenRequest): Observable<ValidateTokenResponse>;
  RefreshToken(ctx: Context, request: RefreshTokenRequest): Observable<RefreshTokenResponse>;
}

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

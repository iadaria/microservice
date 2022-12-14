/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace account {
    export interface AccountService {
        register(data: RegisterRequest, metadata?: Metadata): Observable<RegisterResponse>;
        login(data: LoginRequest, metadata?: Metadata): Observable<LoginResponse>;
        validateToken(data: ValidateTokenRequest, metadata?: Metadata): Observable<ValidateTokenResponse>;
        refreshToken(data: RefreshTokenRequest, metadata?: Metadata): Observable<RefreshTokenResponse>;
    }
    export interface RegisterRequest {
        email?: string;
        // some random string containing password
        password?: string;
    }
    export interface RegisterResponse {
        id?: string;
        email?: string;
        isBlocked?: boolean;
    }
    export interface LoginRequest {
        email?: string;
        // some random string containing password
        password?: string;
    }
    export interface LoginResponse {
        token?: string;
        // Default is Bearer
        tokenType?: string;
        expiresIn?: number;
        refreshToken?: string;
    }
    export interface ValidateTokenRequest {
        token?: string;
    }
    export interface ValidateTokenResponse {
        valid?: boolean;
    }
    export interface RefreshTokenRequest {
        oldToken?: string;
        refreshToken?: string;
        clientId?: string;
        userIp?: string;
    }
    export interface RefreshTokenResponse {
        token?: string;
        // Default is Bearer
        tokenType?: string;
        expiresIn?: number;
        refreshToken?: string;
    }
}


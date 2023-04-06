import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Result, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Result, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Result = LazyLoading extends LazyLoadingDisabled ? EagerResult : LazyResult

export declare const Result: (new (init: ModelInit<Result>) => Result) & {
  copyOf(source: Result, mutator: (draft: MutableModel<Result>) => MutableModel<Result> | void): Result;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly phoneNum?: string | null;
  readonly password?: string | null;
  readonly accounttype?: boolean | null;
  readonly username?: string | null;
  readonly Has?: (Result | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly phoneNum?: string | null;
  readonly password?: string | null;
  readonly accounttype?: boolean | null;
  readonly username?: string | null;
  readonly Has: AsyncCollection<Result>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
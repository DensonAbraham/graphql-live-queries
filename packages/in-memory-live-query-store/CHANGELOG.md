# @n1ru4l/in-memory-live-query-store

## 0.4.0

### Minor Changes

- 1e8b1a9: **BREAKING CHANGE** The API of `LiveQueryStore`.

  The `extractLiveQueryRootIdentifier` function was moved from `@n1ru4l/graphql-live-query` to `@n1ru4l/in-memory-live-query-store`, as it is an implementation detail of the `InMemoryLiveQueryStore`. The implementation could differ based on different store implementations. The function `extractLiveQueryRootIdentifier` was renamed to `extractLiveQueryRootFieldCoordinates` and is also no longer public.

  The `InMemoryLiveQueryStore` can now also process query operations that use `Fragments` and `InlineFragments` on the `RootQueryType`.

  The `operationName` is now also passed to the `LiveQueryStore.register` method.

  ```ts
  import type { DocumentNode, ExecutionResult } from "graphql";

  export type UnsubscribeHandler = () => void;
  export type OperationVariables = { [key: string]: any } | null | undefined;

  export type LiveQueryStoreRegisterParameter = {
    operationDocument: DocumentNode;
    operationName: string | null;
    operationVariables: OperationVariables;
    executeOperation: () => Promise<ExecutionResult>;
    publishUpdate: (executionResult: ExecutionResult, payload: any) => void;
  };

  export abstract class LiveQueryStore {
    abstract async triggerUpdate(identifier: string): Promise<void>;
    abstract register(
      params: LiveQueryStoreRegisterParameter
    ): UnsubscribeHandler;
  }
  ```

### Patch Changes

- Updated dependencies [1e8b1a9]
  - @n1ru4l/graphql-live-query@0.4.0

## 0.3.0

### Minor Changes

- 6a03905: **BREAKING CHANGE**: Change API of `LiveQueryStore`.

  The register method of the `LiveQueryStore` now has changed:

  ```ts
  import type { DocumentNode, ExecutionResult } from "graphql";

  export type UnsubscribeHandler = () => void;
  export type OperationVariables = { [key: string]: any } | null | undefined;

  export abstract class LiveQueryStore {
    abstract async triggerUpdate(identifier: string): Promise<void>;
    abstract register(
      operationDocument: DocumentNode,
      operationVariables: OperationVariables,
      executeQuery: () => Promise<ExecutionResult>,
      publishUpdate: (executionResult: ExecutionResult, payload: any) => void
    ): UnsubscribeHandler;
  }
  ```

### Patch Changes

- Updated dependencies [6a03905]
  - @n1ru4l/graphql-live-query@0.3.0

## 0.2.0

### Minor Changes

- aa2be73: chore: unify how packages are built.

### Patch Changes

- Updated dependencies [aa2be73]
  - @n1ru4l/graphql-live-query@0.2.0

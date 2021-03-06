import * as graphql from "graphql";
import { isSome } from "./isSome";

export const isLiveOperationDefinition = (
  input: graphql.DefinitionNode
): input is graphql.OperationDefinitionNode =>
  input.kind === "OperationDefinition" &&
  input.operation === "query" &&
  isSome(input.directives?.find(d => d.name.value === "live"));

export const extractLiveQueries = (document: graphql.DocumentNode) => {
  return document.definitions.filter(isLiveOperationDefinition);
};

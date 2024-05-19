import { FunctionNameDefinition } from "./utils/get-function-or-class-name";
import { SupportedUnitTestFramework } from "./get-unit-test-framework";
import { getSupportImports } from "./utils/get-support-imports";

export const getDefaultUnitTestFileContent = (
  testFramework: SupportedUnitTestFramework,
  functionName: FunctionNameDefinition,
  fileName: string,
  useCommonJS: boolean,
  addImports: boolean
) => {
  const { name, isClass } = functionName;
  const functionDeclaration = isClass ? `new ${name}()` : `${name}()`;

  return `${
    addImports && getSupportImports(name, fileName, testFramework, useCommonJS)
  }

describe("${name}", () => {
    it("should work", () => {
        expect(${functionDeclaration}).not.toBeNull();
    });
});`;
};
import { FuncArgBase } from "./FuncArgBase.js";
import { ExpressionValue } from "../../../value/ExpressionValue.js";
import {
  ExprEvalResult,
  ExprEvalSuccess,
  ExprEvalTypeErrorObj,
} from "../../ExprEvalResult.js";
import { ExprKind } from "../../ExprKind.js";
import { BooleanValue } from "../../../value/BooleanValue.js";
import { Decimal } from "decimal.js";

export class FuncArgBoolean extends FuncArgBase<BooleanValue> {
  constructor(required: boolean, name: string, defaultValue?: BooleanValue) {
    super(required, name, defaultValue);
  }

  protected transformForTypeCheck(
    invocationValue: ExprEvalSuccess<ExpressionValue>
  ): ExprEvalResult<ExpressionValue> {
    const result = invocationValue.result;
    const value = result.getValue();
    if (typeof value === 'boolean') {
      return invocationValue;
    }
    return new ExprEvalTypeErrorObj(
      ExprKind.FUNCTION_ARGUMENTS,
      `Argument ${this.name} must be a boolean, but was ${JSON.stringify(
        value
      )}`,
      value
    );
  }
}

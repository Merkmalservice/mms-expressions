import {Expr2} from "../Expr2";
import {Expr} from "../Expr";
import {MmsExpressionContext} from "../../context/MmsExpressionContext";
import {NumericValue} from "../../context/value/NumericValue";
import {StringValue} from "../../context/value/StringValue";

export class StringConcatExpr extends Expr2<Expr<StringValue>, Expr<StringValue>, StringValue> {
    constructor(left: Expr<StringValue>, right: Expr<StringValue>) {
        super(left,right);
    }

    evaluate(ctx: MmsExpressionContext): StringValue {
        return StringValue.of(
            this.left.evaluate(ctx).getValue() +
                  this.right.evaluate(ctx).getValue()) ;
    }

}
import {
    IfcExpressionContext
} from "../../context/IfcExpressionContext";
import {Expr2} from "../Expr2";
import {NestedObjectChainExpr} from "./NestedObjectChainExpr";
import {ObjectReferenceExpr} from "./ObjectReferenceExpr";
import {IfcExpressionEvaluationException} from "../IfcExpressionEvaluationException";
import {LiteralValueAnyArity} from "../../context/value/LiteralValueAnyArity";
import {ObjectAccessor} from "../../context/accessor/ObjectAccessor";


export class AttributeReferenceExpr extends Expr2<ObjectReferenceExpr, NestedObjectChainExpr, LiteralValueAnyArity> {

    constructor(left: ObjectReferenceExpr, right: NestedObjectChainExpr) {
        super(left, right);
    }

    evaluate(ctx: IfcExpressionContext): LiteralValueAnyArity {
        const oa: ObjectAccessor = this.left.evaluate(ctx);
        const valueAccessor =  this.right.evaluate(ctx);
        return valueAccessor(oa);
    }
}
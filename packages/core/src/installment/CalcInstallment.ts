import { MAX_QUANTITY_INSTALLMENTS, MOUNTH_TAX } from "../constants";
import Installment from "./Installment";

export default class CalcInstallment {
    execute(
        value: number,
        quantity: number = MAX_QUANTITY_INSTALLMENTS,
        tax: number = MOUNTH_TAX
    ): Installment {
        if (quantity < 2 || quantity > MAX_QUANTITY_INSTALLMENTS) {
            throw new Error('Quantidade de parcelas')
        }

        const total = this.calcCompoundInterest(value, tax, quantity)

        return {
            value: this.toFixed(total / quantity),
            total: this.toFixed(total),
            quantity,
            tax
        }
    }

    private calcCompoundInterest(value: number, tax: number, quantity: number) {
        return value * Math.pow(1 + tax, quantity)
    }

    private toFixed(value: number) {
        return Math.round(value * 100) / 100;
    }
}
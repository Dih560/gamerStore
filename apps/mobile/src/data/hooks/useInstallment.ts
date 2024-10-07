import { CalcInstallment } from "@gstore/core";

export default function useInstallment(value: number, quantity: number = 12) {
    return new CalcInstallment().execute(value, quantity)
}
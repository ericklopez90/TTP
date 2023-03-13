import { StatusPay, DescriptionPay } from './status-pay.interface';


export const statusPay: StatusPay = {
    title: "Saldo pronto pago",
    subtitle: "Ahorra pagando antes del 12 de marzo del 2023",
    total: " 536",
    details: "Detalle de cargos",
    mount: "Enero - Febrero",
}

export const description: DescriptionPay[] = [
    {
        description: "Internet",
        mountDescription: "$170.00",
    },
    {
        description: "Telefonía",
        mountDescription: "$170.00",
    },
    {
        description: "Televisión",
        mountDescription: "$196.00",
    },

]
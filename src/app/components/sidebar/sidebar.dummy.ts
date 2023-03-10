import { ILinks } from './sidebar.interface';

export const linksPrimaryDummy:ILinks []= [
    {
        principalButton: true,
        text:"Control remoto",
        icon:"assets/icons/controlRemoto.svg",
        actionPrincipal:"assets/icons/openNew.svg"
        
    },
    {
        principalButton: true,
        text:"Teléfono",
        icon:"assets/icons/telefono.svg",
        actionPrincipal:"assets/icons/openNew.svg"
    },
]

export const linksSecondaryDummy:ILinks []= [
    {
        principalButton: false,
        text:"Televisión",
    },
    {
        principalButton: false,
        text:"OnDemand",
        action: true,
    },
]

export const linksMoreDummy:ILinks []= [
    {
        principalButton: false,
        text:"Edo de cuenta y pago",
        action: true,
    },
    {
        principalButton: false,
        text:"Mi internet",
        action: true,
    },
    {
        principalButton: false,
        text:"Recomienda y gana",
        action: false,
    },
    {
        principalButton: false,
        text:"Portabilidad",
        action: false,
    },
    {
        principalButton: false,
        text:"Seguimiento de visitas",
        action: false,
    },
]



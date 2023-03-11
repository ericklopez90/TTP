import { ILinks } from './sidebar.interface';

export const linksPrimaryDummy:ILinks []= [
    {
        principalButton: true,
        text:"Control remoto",
        icon:"assets/icons/controlRemoto.svg",
        actionPrincipal:"assets/icons/openNew.svg",
        link:"control-remoto"
        
    },
    {
        principalButton: true,
        text:"Teléfono",
        icon:"assets/icons/telefono.svg",
        actionPrincipal:"assets/icons/openNew.svg",
        link:"telefono"
    },
]

export const linksSecondaryDummy:ILinks []= [
    {
        principalButton: false,
        text:"Televisión",
        link:"television"
    },
    {
        principalButton: false,
        text:"OnDemand",
        action: true,
        link:"on-demand"
    },
]

export const linksMoreDummy:ILinks []= [
    {
        principalButton: false,
        text:"Edo de cuenta y pago",
        action: true,
        link:"estado-de-cuenta"
    },
    {
        principalButton: false,
        text:"Mi internet",
        action: true,
        link:"internet"
    },
    {
        principalButton: false,
        text:"Recomienda y gana",
        action: false,
        link:"recomendaciones"
    },
    {
        principalButton: false,
        text:"Portabilidad",
        action: false,
        link:"portabilidad"
    },
    {
        principalButton: false,
        text:"Seguimiento de visitas",
        action: false,
        link:"visitas"
    },
]



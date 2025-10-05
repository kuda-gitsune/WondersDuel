import { bonusTypes, chainSymbols,cardTypes,resources, sciTokens } from "./gameEnums.js";
const cardList = [
    {
        name: "Glassworks",
        age: 1,
        color: cardTypes.GRAY,
        cost: [
            { resource: resources.COIN, amount: 1 }
        ],
        produces: [
            { resource: resources.GLASS, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Example Card",
        age: 1,
        color: cardTypes.GRAY,
        cost: [
            { resource: resources.COIN, amount: 1 }
        ],
        produces: [
            { resource: resources.GLASS, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Clay Pit",
        age: 1,
        color: cardTypes.BROWN,
        cost: [
            { resource: resources.COIN, amount: 1 }
        ],
        produces: [
            { resource: resources.CLAY, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Quarry",
        age: 1,
        color: cardTypes.BROWN,
        cost: [],
        produces: [
            { resource: resources.STONE, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Stable",
        age: 1,
        color: cardTypes.RED,
        cost: [
            { resource: resources.WOOD, amount: 1 }
        ],
        produces: [
            { resource: resources.MILITARY_POINTS, amount: 1 }
        ],
        chainSymbol: [chainSymbols.HORSESHOE],
        freeSymbol: null

    },
    {
        name: "Garnison",
        age: 1,
        color: cardTypes.RED,
        cost: [
            { resource: resources.CLAY, amount: 1 }
        ],
        produces: [
            { resource: resources.MILITARY_POINTS, amount: 1 }
        ],
        chainSymbol: [chainSymbols.SWORD],
        freeSymbol: null

    },
    {
        name: "Palisade",
        age: 1,
        color: cardTypes.RED,
        cost: [
            { resource: resources.COIN, amount: 2 }
        ],
        produces: [
            { resource: resources.MILITARY_POINTS, amount: 1 }
        ],
        chainSymbol: [chainSymbols.TOWER],
        freeSymbol: null

    },
    {
        name: "Guard Tower",
        age: 1,
        color: cardTypes.RED,
        cost: [],
        produces: [
            { resource: resources.MILITARY_POINTS, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Scriptorium",
        age: 1,
        color: cardTypes.GREEN,
        cost: [
            { resource: resources.COIN, amount: 2 }
        ],
        produces: [
            { sciToken: sciTokens.INK, amount: 1 }
        ],
        chainSymbol: [chainSymbols.BOOK],
        freeSymbol: null

    },
    {
        name: "Tavern",
        age: 1,
        color: cardTypes.YELLOW,
        cost: [],
        produces: [
            { resource: resources.COIN, amount: 4 }
        ],
        chainSymbol: chainSymbols.CAMPHOR,
        freeSymbol: null

    },
    {
        name: "Apothecary",
        age: 1,
        color: cardTypes.GREEN,
        cost: [
            { resource: resources.GLASS, amount: 1 }
        ],
        produces: [
            { resource: resources.VICTORY_POINTS, amount: 1 },
            { sciToken: sciTokens.WHEEL, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Pharmacist",
        age: 1,
        color: cardTypes.GREEN,
        cost: [
            { resource: resources.COIN, amount: 2 }
        ],
        produces: [
            { sciToken: sciTokens.WHEEL, amount: 1 }
        ],
        chainSymbol: [chainSymbols.COG],
        freeSymbol: null

    },
    {
        name: "Workshop",
        age: 1,
        color: cardTypes.GREEN,
        cost: [
            { resource: resources.PAPYRUS, amount: 1 }
        ],
        produces: [
            { resource: resources.VICTORY_POINTS, amount: 1 },
            { sciToken: sciTokens.SQUARE, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Theater",
        age: 1,
        color: cardTypes.BLUE,
        cost: [],
        produces: [
            { resource: resources.VICTORY_POINTS, amount: 3 }
        ],
        chainSymbol: [chainSymbols.MASK],
        freeSymbol: null

    },
    {
        name: "Clay Reserve",
        age: 1,
        color: cardTypes.YELLOW,
        cost: [
            { resource: resources.COIN, amount: 3 }
        ],
        produces: [
            { bonusType: bonusTypes.DISCOUNT, subType: [resources.CLAY] }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Wood Reserve",
        age: 1,
        color: cardTypes.YELLOW,
        cost: [
            { resource: resources.COIN, amount: 3 }
        ],
        produces: [
            { bonusType: bonusTypes.DISCOUNT, subType: [resources.WOOD] }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Altar",
        age: 1,
        color: cardTypes.BLUE,
        cost: [],
        produces: [
            { resource: resources.VICTORY_POINTS, amount: 3 }
        ],
        chainSymbol: [chainSymbols.MOON],
        freeSymbol: null

    },
    {
        name: "Stone Reserve",
        age: 1,
        color: cardTypes.YELLOW,
        cost: [
            { resource: resources.COIN, amount: 3 }
        ],
        produces: [
            { bonusType: bonusTypes.DISCOUNT, subType: [resources.STONE] }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Clay Pool",
        age: 1,
        color: cardTypes.BROWN,
        cost: [],
        produces: [
            { resource: resources.CLAY, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Lumber Yard",
        age: 1,
        color: cardTypes.BROWN,
        cost: [],
        produces: [
            { resource: resources.WOOD, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Stone Pit",
        age: 1,
        color: cardTypes.BROWN,
        cost: [
            { resource: resources.COIN, amount: 1 }
        ],
        produces: [
            { resource: resources.STONE, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
    {
        name: "Baths",
        age: 1,
        color: cardTypes.BLUE,
        cost: [
            { resource: resources.STONE, amount: 1 }
        ],
        produces: [
            { resource: resources.VICTORY_POINTS, amount: 1 },
        ],
        chainSymbol: [chainSymbols.DROPLET],
        freeSymbol: null

    },
    {
        name: "Press",
        age: 1,
        color: cardTypes.GRAY,
        cost: [
            { resource: resources.COIN, amount: 1 }
        ],
        produces: [
            { resource: resources.PAPYRUS, amount: 1 }
        ],
        chainSymbol: null,
        freeSymbol: null

    },
]
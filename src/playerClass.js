import { chainSymbols, resources } from "./gameEnums.js";
const Player = {
    name: null,
    resources: {
        [resources.WOOD]: 0,
        [resources.STONE]: 0,
        [resources.CLAY]: 0,
        [resources.GLASS]: 0,
        [resources.PAPYRUS]: 0,
        [resources.COIN]: 0,
        [resources.VICTORY_POINTS]: 0,
        [resources.MILITARY_POINTS]: 0,
    },
    bonuses: [],
    buldings: [],
    chainSymbols: [],
    wonders: [],
    sciTokens: [],
    historyMoves: []
}

export { Player };
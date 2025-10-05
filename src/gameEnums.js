const bonusTypes = Object.freeze({
    BONUS_TURN: Symbol("BONUS_TURN"),
    CHAIN_BONUS: Symbol("CHAIN_BONUS"),
    COIN_BONUS: Symbol("COIN_BONUS"),
    DISCOUNT: Symbol("DISCOUNT"),
    EXTRA_MILITARY_POINTS: Symbol("EXTRA_MILITARY_POINTS"),
    PROGRESS_TOKEN: Symbol("PROGRESS_TOKEN"),
});

const cardTypes = Object.freeze({
    BLUE: Symbol("BLUE"),
    BROWN: Symbol("BROWN"),
    GUILD: Symbol("GUILD"),
    GRAY: Symbol("GRAY"),
    GREEN: Symbol("GREEN"),
    RED: Symbol("RED"),
    VIOLET: Symbol("VIOLET"),
    YELLOW: Symbol("YELLOW"),
});

const chainSymbols = Object.freeze({
    BARELL: Symbol("BARELL"),
    BOOK: Symbol("BOOK"),
    CAMPHOR: Symbol("CAMPHOR"),
    COG: Symbol("COG"),
    COLUMN: Symbol("COLUMN"),
    DROPLET: Symbol("DROPLET"),
    HELMET: Symbol("HELMET"),
    HORSESHOE: Symbol("HORSESHOE"),
    LAMP: Symbol("LAMP"),
    LYRE: Symbol("LYRE"),
    MASK: Symbol("MASK"),
    MOON: Symbol("MOON"),
    SUN: Symbol("SUN"),
    SWORD: Symbol("SWORD"),
    TARGET: Symbol("TARGET"),
    TEMPLE: Symbol("TEMPLE"),
    TOWER: Symbol("TOWER"),
});

const moveOptions = Object.freeze({
    BUILD: Symbol("BUILD"),
    SELL: Symbol("SELL"),
    WONDER: Symbol("WONDER"),
});

const resources = Object.freeze({
    CLAY: Symbol("CLAY"),
    COIN: Symbol("COINS"),
    GLASS: Symbol("GLASS"),
    MILITARY_POINTS: Symbol("MILITARY_POINTS"),
    PAPYRUS: Symbol("PAPYRUS"),
    STONE: Symbol("STONE"),
    VICTORY_POINTS: Symbol("VICTORY_POINTS"),
    WOOD: Symbol("WOOD"),
});

const sciTokens = Object.freeze({
    CLOCK: Symbol("CLOCK"),
    GLOBE: Symbol("GLOBE"),
    INK: Symbol("INK"),
    LAW: Symbol("LAW"),
    MORTAR: Symbol("MORTAR"),
    SQUARE: Symbol("SQUARE"),
    WHEEL: Symbol("WHEEL"),
});

export { bonusTypes, cardTypes, chainSymbols, moveOptions, resources, sciTokens };

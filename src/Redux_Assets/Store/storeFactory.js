export const storeFactory = (array) => {
    return ({
        array: {
            unsortedArray: [],
            sortedArray: [],
            currentArray: [],
            splitEnds: [],
            currentFocus: [],
            selected: [],
        },
        animations: {
            frames: [],
            currentAnimation: [],
        },
        settings: {
            // maxItems: 5,
            delay: .01,
            isPaused: true,
        }
    });
}
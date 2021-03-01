import {storeFactory} from "../Store/storeFactory.js";
import produce from "immer";
import handleGenerateRandArr from "../../Helpers/randomArrayGenerator";
import {mergeSortHelper} from "../../Helpers/AnimationHelper";

export const reducer = (state = storeFactory(), action) => {
    switch(action.type) {
        case "randomize":
            const randArr = handleGenerateRandArr(action.payload.size);
            return produce(state, draftState => {
                draftState.array.unsortedArray = randArr
                draftState.array.sortedArray = randArr
                draftState.array.currentArray = randArr
                const {sortedArray: solution, animations: frames} = mergeSortHelper(draftState.array.unsortedArray);
                draftState.array.sortedArray = solution;
                draftState.array.currentFocus = [0, draftState.array.unsortedArray.length-1];
                draftState.animations.frames = frames;
                draftState.animations.currentAnimation = 0;
                draftState.settings.isPaused = true;
            });
        case "play":
            return produce(state, draftState => {
                draftState.settings.isPaused = false
                draftState.settings.delay = action.payload.delay
            });
        case "pause":
            return produce(state, draftState => {
                draftState.settings.isPaused = true

            });
        case "reset":
            return produce(state, draftState => {
                draftState.settings.isPaused = true
                draftState.array.sortedArray = draftState.array.unsortedArray
                draftState.array.currentArray = draftState.array.unsortedArray

                const {sortedArray: solution, animations: frames} = mergeSortHelper(draftState.array.unsortedArray);
                draftState.array.sortedArray = solution;
                draftState.animations.frames = frames;
                draftState.animations.currentAnimation = 0;
            });
        case "processNextFrame":
            return produce(state, draftState => {
                    try {
                        switch (draftState.animations.frames[draftState.animations.currentAnimation].name) {
                            case "focus":
                                draftState.array.currentFocus = [draftState.animations.frames[draftState.animations.currentAnimation].left, draftState.animations.frames[draftState.animations.currentAnimation].right];
                                break;
                            case "move":
                                let itemIndex = draftState.animations.frames[draftState.animations.currentAnimation].itemIndex;
                                let leftBound = draftState.animations.frames[draftState.animations.currentAnimation].toIndex;
                                if (itemIndex !== leftBound) {
                                    let newArray = [...draftState.array.currentArray];
                                    let item = newArray.splice(itemIndex, 1);
                                    newArray.splice(leftBound, 0, item[0]);
                                    draftState.array.currentArray = newArray;
                                }
                                break;
                        }
                    } catch (e) {}
                    draftState.animations.currentAnimation = draftState.animations.currentAnimation + 1;
            });
        default:
            return state;
    }
}
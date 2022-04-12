import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/models/GameModel';

@Pipe({
    name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {
    transform(
        value: Game[],
        priceQuery: number | null,
        actionTagQuery: boolean | null,
        adventureTagQuery: boolean | null,
        indieTagQuery: boolean | null
    ): Game[] {
        let defaultState =
            (actionTagQuery === null || actionTagQuery === false) &&
            (adventureTagQuery === null || adventureTagQuery === false) &&
            (indieTagQuery === null || indieTagQuery === false);

        if (priceQuery === null && defaultState) {
            return value;
        }

        let games = value.filter((game: Game) => {
            let isValidByPrice = priceQuery !== null && game.price !== null && game.price <= priceQuery;
            let isAction = actionTagQuery && game.tag === 'Action';
            let isAdventure = adventureTagQuery && game.tag === 'Adventure';
            let isIndie = indieTagQuery && game.tag === 'Indie';

            if (priceQuery == null && !defaultState) {
                if (isAction) {
                    return game;
                }
                if (isAdventure) {
                    return game;
                }
                if (isIndie) {
                    return game;
                }
            }

            if (priceQuery !== null && !defaultState && isValidByPrice) {
                if (isAction) {
                    return game;
                }
                if (isAdventure) {
                    return game;
                }
                if (isIndie) {
                    return game;
                }
            }

            if (priceQuery !== null && defaultState && isValidByPrice) {
                return game;
            } else {
                return;
            }
        });
        console.log(games);
        return games;
    }
}

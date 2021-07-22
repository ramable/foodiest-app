import FavoriteRestoIdb from "../src/scripts/data/database-idb";
import itActsAsFavoriteRestoModel from "./contract/favoriteRestoContract";

describe('Favorite Resto Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
            await FavoriteRestoIdb.deleteResto(resto.id);
        });
    });

    itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
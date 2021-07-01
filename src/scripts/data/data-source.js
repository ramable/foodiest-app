import API_ENDPOINT from '../globals/api-endpoint';

class RestoDataSource {
    static async restoLists() {
        const response = await fetch(API_ENDPOINT.RESTO_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async searchResto(query) {
        const response = await fetch(API_ENDPOINT.SEARCH(query));
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
}

export default RestoDataSource;
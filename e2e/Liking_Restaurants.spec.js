const assert = require('assert');

Feature('Liking Restaurants');

Before(({
    I
}) => {
    I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant', ({
    I
}) => {
    I.seeElement('#favorite__notFound');
});

Scenario('Liking a restaurant', async ({
    I
}) => {
    I.seeElement('#favorite__notFound');

    I.amOnPage('/');
    I.seeElement('.col-resto');
    const firstCard = locate('.resto-name a').first()
    const firstTitle = await I.grabTextFrom(firstCard);
    I.seeElement(firstCard);
    I.click(firstCard);
    I.click(firstCard);

    I.seeElement('#like__button');
    I.click('#like__button');

    I.amOnPage('/#/favorite');
    I.seeElement('.col-resto');

    const likedTitleCard = await I.grabTextFrom('.resto-name');
    assert.strictEqual(firstTitle, likedTitleCard);
});
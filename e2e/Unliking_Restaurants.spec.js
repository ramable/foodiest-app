const assert = require('assert');

Feature('Unliking Restaurants');

let firstTitle;

Before(async ({
    I
}) => {
    I.amOnPage('/');

    I.seeElement('.col-resto');
    const firstCard = locate('.resto-name a').first();
    firstTitle = await I.grabTextFrom(firstCard);
    I.seeElement(firstCard);
    I.click(firstCard);

    I.seeElement('#like__button');
    I.click('#like__button');

    I.amOnPage('/#/favorite');
});

Scenario('Unliking a restaurant', async ({
    I
}) => {
    I.seeElement('#content__favorite');

    const likedTitleCard = await I.grabTextFrom('.resto-name');
    assert.strictEqual(firstTitle, likedTitleCard);

    I.click('.resto-name a');

    I.seeElement('#like__button');
    I.click('#like__button');

    I.amOnPage('/#/favorite');

    I.seeElement('#favorite__notFound');
});
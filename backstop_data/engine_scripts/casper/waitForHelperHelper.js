const TIMEOUT_DEFAULT = 2000;

module.exports = function (casper, timeout) {
    const TIMEOUT = timeout || TIMEOUT_DEFAULT;

    return function waitFor (selector) {
        if (selector) {
            casper.waitForSelector(
                selector,
                () => {},
                () => {
                    console.error("NOT FOUND > " + selector); // eslint-disable-line no-console
                },
                TIMEOUT
            );
        }
    };
};

enum ExpectedCookies {
    legacy = 'CookieConsent-legacy=true;',
    consent = 'CookieConsent=true',
}

export const validateTour = (): boolean => {
    const cookies = document.cookie.split(' ');

    return (
        cookies[0] === ExpectedCookies.legacy &&
        cookies[1] === ExpectedCookies.consent
    );
};

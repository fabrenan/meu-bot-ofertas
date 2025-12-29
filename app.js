// Lógica de Deep Linking para facilitar a entrada no Telegram
document.addEventListener('DOMContentLoaded', () => {
	const bindTelegramDeepLink = (el) => {
		el.addEventListener('click', (e) => {
			// Google Ads conversion event (se disponível)
			try {
				if (window.gtag && window.__GADS_SEND_TO) {
					window.gtag('event', 'conversion', { send_to: window.__GADS_SEND_TO });
				}
			} catch (_) {}

			const telegramUrl = 'https://t.me/amazonquasenovo';
			const telegramAppUri = 'tg://resolve?domain=amazonquasenovo';

			const start = Date.now();
			window.location.href = telegramAppUri;

			setTimeout(() => {
				const now = Date.now();
				if (now - start < 1000) {
					window.location.href = telegramUrl;
				}
			}, 500);

			e.preventDefault();
		});
	};

	document.querySelectorAll('.telegram-cta').forEach(bindTelegramDeepLink);
});

"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "windowking-cookie-consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(localStorage.getItem(COOKIE_CONSENT_KEY) !== "accepted");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-[#0668b7] px-4 py-2 text-white shadow-[0_-4px_18px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
        <p className="text-xs leading-relaxed sm:text-sm">
          We use cookies to help you get the best possible experience of our
          site. By clicking Accept you agree to our use of cookies.
        </p>
        <button
          type="button"
          onClick={acceptCookies}
          className="shrink-0 rounded bg-white px-6 py-2 text-xs font-bold uppercase text-[#0668b7] transition-colors hover:bg-[#F85A21] hover:text-white sm:text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

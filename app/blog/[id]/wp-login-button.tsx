"use client";

import { useEffect, useState } from "react";
import { FaWordpress } from "react-icons/fa6";

export default function WPLoginButton() {
  const [oauthUrl, setOauthUrl] = useState<string>("");

  useEffect(() => {
    const redirectUrl = encodeURIComponent(
      `${window.location.hostname}/wp-oauth-callback`,
    );
    setOauthUrl(
      `https://public-api.wordpress.com/oauth2/authorize?client_id=${process.env.WP_COM_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=code`,
    );
  }, []);

  return (
    <a
      className="flex gap-1 p-2 bg-primary text-white items-center w-fit rounded-sm"
      href={oauthUrl}
      title="Login with WordPress.com"
    >
      <FaWordpress /> Login to comment
    </a>
  );
}

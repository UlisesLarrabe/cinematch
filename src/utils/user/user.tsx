import { useEffect, useState } from "react";

export function useAnonUser() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let storedId = localStorage.getItem("cinematch_user_id");

    if (!storedId) {
      storedId = crypto.randomUUID();
      localStorage.setItem("cinematch_user_id", storedId);
    }

    setUserId(storedId);
  }, []);

  return userId;
}

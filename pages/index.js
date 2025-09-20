import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const sendMessage = async () => {
    try {
      setStatus("送信中...");
      const res = await fetch("/api/slack", { method: "POST" });
      const data = await res.json();

      if (res.ok) {
        setStatus("✅ 送信成功！");
      } else {
        setStatus(`❌ エラー: ${data.message}`);
      }
    } catch (error) {
      setStatus("❌ 送信失敗");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Slack メッセージ送信テスト</h1>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={sendMessage}
      >
        Slackに送信
      </button>

      {/* ステータス表示 */}
      {status && <p style={{ marginTop: "20px" }}>{status}</p>}
    </div>
  );
}

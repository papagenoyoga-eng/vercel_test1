export default function Home() {
  const sendMessage = async () => {
    const res = await fetch("/api/slack", { method: "POST" });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Slack メッセージ送信テスト</h1>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        onClick={sendMessage}
      >
        Slackに送信
      </button>
    </div>
  );
}

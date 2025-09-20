// pages/api/slack.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    const payload = {
      text: "✅ VercelからSlackにメッセージ送信テスト成功！",
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    res.status(200).json({ message: "Slackに送信されました！" });
  } catch (error) {
    res.status(500).json({ message: "Slack送信エラー", error: error.message });
  }
}

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    success: true,
    app: "NAWZPAY",
    status: "Backend Online",
    mode: "TEST",
    message: "NAWZPAY API berhasil dijalankan"
  });
}

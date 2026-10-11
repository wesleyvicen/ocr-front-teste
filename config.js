// URL padrão da API. Pode ser trocada na tela em "Configurar API".
// Rodando local (localhost), usa a API local automaticamente.
window.OCR_API_URL = ["localhost", "127.0.0.1"].includes(location.hostname)
  ? "http://localhost:8000"
  : "https://ocr-api.wesleyv.online";

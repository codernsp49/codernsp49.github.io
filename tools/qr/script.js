function generateQR() {
  const text = document.getElementById("text").value;
  const box = document.getElementById("qrBox");

  if (!text.trim()) {
    alert("Enter text or URL");
    return;
  }

  const url =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(text);

  box.innerHTML = `<img src="${url}" alt="QR Code">`;
}

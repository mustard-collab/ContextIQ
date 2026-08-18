document.getElementById("explainBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => window.getSelection().toString()
  }, async (selection) => {
    if (!selection || !selection[0] || !selection[0].result) {
      document.getElementById("result").innerText = "Please select text first!";
      return;
    }
    const text = selection[0].result;
    document.getElementById("result").innerText = "Analyzing...";
    
    try {
      const res = await fetch("http://localhost:5000/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      document.getElementById("result").innerHTML = `
        <p><b>Simple:</b> ${data.simple}</p>
        <p><b>Context:</b> ${data.context}</p>
        <p><b>Bias:</b> ${data.bias}</p>
      `;
    } catch (err) {
      document.getElementById("result").innerText = "Error: Is backend running?";
    }
  });
});
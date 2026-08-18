document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString();
  if (selection.length > 0) {
    console.log("Text selected:", selection);
  }
});
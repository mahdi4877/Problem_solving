function coinFlip() {
  return new Promise((resolve, reject) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    if (result === "Heads") {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

coinFlip()
  .then((outcome) => console.log("Resolved:", outcome))
  .catch((error) => console.log("Rejected:", error));

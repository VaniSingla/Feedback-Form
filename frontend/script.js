const form = document.getElementById("form");
const message = document.getElementById("message");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  // Validation
  if (!name || !email || !feedback) {
    message.innerText = "All fields are required!";
    message.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.innerText = "Invalid email!";
    message.style.color = "red";
    return;
  }

  // Disable button to prevent multiple clicks
  button.disabled = true;
  button.innerText = "Submitting...";

  try {
    const res = await fetch("http://localhost:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, feedback }),
    });

    const data = await res.json();

    if (data.success) {
      message.innerText = data.message;
      message.style.color = "lightgreen";
      form.reset();
    } else {
      message.innerText = data.message;
      message.style.color = "red";
    }

  } catch (error) {
    console.error("Error:", error);
    message.innerText = "Server error!";
    message.style.color = "red";
  }

  // Re-enable button
  button.disabled = false;
  button.innerText = "Submit";
});
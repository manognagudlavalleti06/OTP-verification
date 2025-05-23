let generatedOTP = null;

const generateBtn = document.getElementById("generateBtn");
const verifyBtn = document.getElementById("verifyBtn");
const generatedOtpDisplay = document.getElementById("generatedOtp");
const otpInput = document.getElementById("otpInput");
const statusMsg = document.getElementById("statusMsg");

generateBtn.addEventListener("click", () => {
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  generatedOtpDisplay.textContent = `🔢 OTP: ${generatedOTP}`;
  statusMsg.textContent = "";
  otpInput.value = "";
});

verifyBtn.addEventListener("click", () => {
  const userInput = otpInput.value.trim();

  if (!generatedOTP) {
    statusMsg.textContent = "❗ Please generate an OTP first!";
    statusMsg.style.color = "#ffcc00";
  } else if (userInput === generatedOTP) {
    statusMsg.textContent = "✅ OTP Verified Successfully!";
    statusMsg.style.color = "#00ff99";
  } else {
    statusMsg.textContent = "❌ Incorrect OTP. Try Again.";
    statusMsg.style.color = "#ff4b2b";
  }
});

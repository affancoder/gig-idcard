// Sample data array - replace with backend data
const sampleData = [
  {
    id: "GTM001",
    name: "Avery Davis",
    partnerName: "Avery Davis",
    projectName: "Sales & Marketing",
    phoneNo: "+91 70812 66668",
    joinDate: "03/15/2024",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    address:
      "RISH Jhansi Incubation Centre<br>Jhansi Nagar Nigam Premises, Near<br>Elite Chauraha, Civil Line, Jhansi,<br>Uttar Pradesh - 204002",
  },
  {
    id: "GTM002",
    name: "Sarah Johnson",
    partnerName: "Sarah Johnson",
    projectName: "Software Development",
    phoneNo: "+91 98765 43210",
    joinDate: "02/20/2024",
    profileImage:
      "https://www.google.com/imgres?q=img%20dp&imgurl=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fa%2FAVvXsEgrhZC7JahHh8UpgnG-pyq822oYO1sc5E2AJp_dDYYhckg6GqS3YnwHEtY4FfW8p2uR4YJqrz9fsV83uZsxJMTcjt1srSLOLVtrtuHClJcrId6bclxlnH30vrvcYJz7XbSSMHrz0N9saa1D8ZF91TQHWPbSDuWwEwkEAcwBfZuFrczOwEdQtEYVk3F2Pw%3Ds320&imgrefurl=https%3A%2F%2Fusername4all.com%2Fboys-dp%2F&docid=dlkqvZo1PkL5kM&tbnid=1mYRqkbgGM2Y4M&vet=12ahUKEwiNltSi3rSOAxVHXmwGHYMOFGAQM3oECB0QAA..i&w=320&h=320&hcb=2&ved=2ahUKEwiNltSi3rSOAxVHXmwGHYMOFGAQM3oECB0QAA",
    address:
      "RISH Jhansi Incubation Centre<br>Jhansi Nagar Nigam Premises, Near<br>Elite Chauraha, Civil Line, Jhansi,<br>Uttar Pradesh - 204002",
  },
  {
    id: "GTM003",
    name: "Michael Chen",
    partnerName: "Michael Chen",
    projectName: "Digital Marketing",
    phoneNo: "+91 87654 32109",
    joinDate: "01/10/2024",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    address:
      "RISH Jhansi Incubation Centre<br>Jhansi Nagar Nigam Premises, Near<br>Elite Chauraha, Civil Line, Jhansi,<br>Uttar Pradesh - 204002",
  },
];

let currentIndex = 0;
let isFlipped = false;

// Initialize the card
function initCard() {
  updateCardData();
  updateCounter();
}

// Update card data
function updateCardData() {
  const data = sampleData[currentIndex];

  document.getElementById("profileImage").src = data.profileImage;
  document.getElementById("profileImage").alt = data.name;
  document.getElementById("employeeName").textContent = data.name.toUpperCase();
  document.getElementById("employeeId").textContent = data.id;
  document.getElementById("partnerName").textContent = data.partnerName;
  document.getElementById("projectName").textContent = data.projectName;
  document.getElementById("phoneNo").textContent = data.phoneNo;
  document.getElementById("joinDate").textContent = data.joinDate;
  document.getElementById("address").innerHTML = data.address;
}

// Update counter
function updateCounter() {
  document.getElementById("cardCounter").textContent = `Card ${
    currentIndex + 1
  } of ${sampleData.length}`;
}

// Previous card
function previousCard() {
  currentIndex = (currentIndex - 1 + sampleData.length) % sampleData.length;
  updateCardData();
  updateCounter();

  // Reset flip if showing back
  if (isFlipped) {
    flipCard();
  }
}

// Next card
function nextCard() {
  currentIndex = (currentIndex + 1) % sampleData.length;
  updateCardData();
  updateCounter();

  // Reset flip if showing back
  if (isFlipped) {
    flipCard();
  }
}

// Flip card
function flipCard() {
  const card = document.getElementById("idCard");
  const flipText = document.getElementById("flipText");

  if (isFlipped) {
    card.classList.remove("flipped");
    flipText.textContent = "Show Back";
    isFlipped = false;
  } else {
    card.classList.add("flipped");
    flipText.textContent = "Show Front";
    isFlipped = true;
  }
}

// Click on card to flip
document.getElementById("idCard").addEventListener("click", flipCard);

// Initialize when page loads
document.addEventListener("DOMContentLoaded", initCard);

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      previousCard();
      break;
    case "ArrowRight":
      nextCard();
      break;
    case " ":
    case "Enter":
      event.preventDefault();
      flipCard();
      break;
  }
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]')

  for (const link of scrollLinks) {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  }

  // Form submission handling
  const contactForm = document.querySelector("#contact form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all fields")
        return
      }

      // Here you would typically send the form data to a server
      // For demo purposes, just show a success message
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
    })
  }
})


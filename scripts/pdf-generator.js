// This script uses html2pdf.js to convert the HTML resume to PDF
// You would need to include this script in your resume.html file
// and add the html2pdf.js library

window.onload = () => {
  // Only run this script if we're not in a print preview
  if (!window.matchMedia("print").matches) {
    const resumeElement = document.querySelector(".resume")

    // Create a button to download as PDF
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download as PDF"
    downloadButton.style.position = "fixed"
    downloadButton.style.top = "20px"
    downloadButton.style.right = "20px"
    downloadButton.style.padding = "10px 15px"
    downloadButton.style.backgroundColor = "#7c3aed"
    downloadButton.style.color = "white"
    downloadButton.style.border = "none"
    downloadButton.style.borderRadius = "4px"
    downloadButton.style.cursor = "pointer"
    downloadButton.style.fontWeight = "500"
    downloadButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"

    downloadButton.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#6d28d9"
    })

    downloadButton.addEventListener("mouseout", function () {
      this.style.backgroundColor = "#7c3aed"
    })

    downloadButton.addEventListener("click", () => {
      // Use browser's print functionality for simplicity
      window.print()

      // If you want to use html2pdf.js instead, uncomment this code:
      /*
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'jay-mewada-resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      
      // New Promise-based usage:
      html2pdf().set(opt).from(resumeElement).save();
      */
    })

    document.body.appendChild(downloadButton)
  }
}

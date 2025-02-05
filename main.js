async function loadAndCaptureTranscript() {

    let transcriptText = '';
    let totalCues = 123;  // ***** REMEMBER TO CHANGE THIS FOR YOUR TRANSCRIPT *****
    
    for (let i = 0; i <= totalCues; i++) {
    let element = document.querySelector(`#transcript-cue-${i}`);
        if (element) {
            // Scroll the element into view    
            element.scrollIntoView();
            await new Promise(resolve => setTimeout(resolve, 200)); // Wait for it to load fully
            transcriptText += element.innerText + '\n';
        }
    }
    
    if (transcriptText) {
        console.log(transcriptText);
        let blob = new Blob([transcriptText], { type: 'text/plain' });
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'transcript.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } else {
        console.log("No transcript elements found.");
    }
    
}
    
// Execute the function
loadAndCaptureTranscript();
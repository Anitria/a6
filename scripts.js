const mediaElement = document.getElementById("mediaElement");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");
    const mediaSelect = document.getElementById("mediaSelect");
    const eventResponse = document.getElementById("eventResponse");

    // Play Button 
    playButton.addEventListener("click", () => {
      mediaElement.play();
    });

    // Pause Button 
    pauseButton.addEventListener("click", () => {
      mediaElement.pause();
    });

    // Stop Button 
    stopButton.addEventListener("click", () => {
      mediaElement.pause();
      mediaElement.currentTime = 0;
    });

    // Media Selection Event
    mediaSelect.addEventListener("change", () => {
      const selectedMedia = mediaSelect.value;
      mediaElement.src = selectedMedia;
      mediaElement.load();
    });

    // Media Event Listener 
    mediaElement.addEventListener("ended", () => {
      eventResponse.innerHTML = "Media playback has ended.";
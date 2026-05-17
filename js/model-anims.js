/*const modelViewer = document.getElementById('modelViewer');
const playButton = document.getElementById('model-expand-button');
playButton.addEventListener('click', () => {
    modelViewer.play();
});*/

function modelAnim(){
    modelViewer = document.getElementById('modelViewer');
    modelViewer.play();
    setInterval(() => {
        modelViewer.pause();
    }, 5000);
}
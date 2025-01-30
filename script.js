document.getElementById('yesButton').addEventListener('click', function() {
    var flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Agregamos la flor al contenedor
    var flowerContainer = document.getElementById('flowerContainer');
    flowerContainer.appendChild(flower);
});

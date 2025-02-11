// function releaseHearts(event) {
//     const container = document.querySelector('.heart-container');
    
//     for (let i = 0; i < 5; i++) {
//         let heart = document.createElement("div");
//         heart.classList.add("floating-heart");
//         heart.innerHTML = "❤️";
        
//         // Устанавливаем позицию относительно контейнера
//         heart.style.left = `${Math.random() * 100 - 50}px`;
//         heart.style.top = `0px`; // Начальная позиция
//         heart.style.position = "absolute";
//         heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        
//         container.appendChild(heart);
        
//         // Удаляем через 2 секунды
//         setTimeout(() => heart.remove(), 2000);
//     }
// }
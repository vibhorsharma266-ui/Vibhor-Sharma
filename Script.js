function showWish() {
    const wish = document.getElementById("wish");

    wish.style.display = "block";

    // Confetti effect
    for (let i = 0; i < 80; i++) {
        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (20 + Math.random() * 20) + "px";
        confetti.style.animation = "fall 4s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
    from{
        transform:translateY(-20px) rotate(0deg);
    }
    to{
        transform:translateY(110vh) rotate(720deg);
    }
}
`;

document.head.appendChild(style);

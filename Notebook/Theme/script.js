const rules = document.getElementById("rules");

for (let i = 0; i < 20; i++) {
    const rule = document.createElement("div");
    rule.className = "rule";
    rule.style.top = `${i * 24}px`;
    rules.appendChild(rule);
}

function fitNotebook() {
    const book = document.getElementById("book");

    const availableWidth = window.innerWidth - 20;
    const availableHeight = window.innerHeight - 20;

    const scale = Math.min(
        1,
        availableWidth / 1012,
        availableHeight / 612
    );

    book.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", fitNotebook);
fitNotebook();

let dinheiro = 100;
let ambiente = 50;

function atualizarTela() {
    document.getElementById("dinheiro").innerText = dinheiro;
    document.getElementById("ambienteBar").style.width = ambiente + "%";

    // Controle de cor da barra de ambiente
    if (ambiente > 60) {
        document.getElementById("ambienteBar").style.background = "green";
    } else if (ambiente > 30) {
        document.getElementById("ambienteBar").style.background = "orange";
    } else {
        document.getElementById("ambienteBar").style.background = "red";
    }

    // Condição de derrota
    if (ambiente <= 0) {
        alert("O meio ambiente entrou em colapso!");
        location.reload();
    }

    // Condição de vitória
    if (dinheiro >= 500 && ambiente >= 50) {
        alert("Você venceu!");
        location.reload();
    }
}

function plantar() {
    dinheiro += 50;
    ambiente -= 10;
    document.getElementById("mensagem").innerText = "Você aumentou a produção agrícola.";
    atualizarTela();
}

function preservar() {
    if (dinheiro >= 20) {
        dinheiro -= 20;
        ambiente += 15; // Aumenta o meio ambiente (limitado a 100% se quiser tratar depois)
        if (ambiente > 100) ambiente = 100; // Garante que não passe de 100%
        
        document.getElementById("mensagem").innerText = "Você investiu em preservação ambiental.";
    } else {
        document.getElementById("mensagem").innerText = "Dinheiro insuficiente para preservar!";
    }
    atualizarTela();
}

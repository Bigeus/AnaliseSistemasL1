let sequenciaFinal = "";

for (let i = 1; i <= 10; i++) {
    sequenciaFinal += i;
    if (i < 10) {
        sequenciaFinal += "-";
    }
}

console.log(sequenciaFinal);
function calculate(event) {
    event.preventDefault;

    const height = Number(document.getElementById("height").value);
    console.log(height)

    const age = Number(document.getElementById("age").value);
    console.log(age)

    const weight = Number(document.getElementById("weight").value);
    console.log(weight)

    const female = document.getElementById("female").checked;
    console.log(female)

    const activityLevel = Number(document.getElementById("activityLevel").value);
    console.log(activityLevel)

    const grundumsatzKcalOutput = document.getElementById("grundumsatzKcalOutput");
    console.log(grundumsatzKcalOutput)

    const grundumsatzKJOutput = document.getElementById("grundumsatzKJOutput");
    console.log(grundumsatzKJOutput)

    const gesamtumsatzKcalOutput = document.getElementById("gesamtumsatzKcalOutput");
    console.log(gesamtumsatzKcalOutput)

    const gesamtumsatzKJOutput = document.getElementById("gesamtumsatzKJOutput");
    console.log(gesamtumsatzKJOutput)

    if (!(height) || !((height >= 50) && (height <= 272))) {
        alert("Körpergröße muss eingegeben werden bzw. zwischen 50-272cm sein");
        return;
    }
    if (!(age) || !((age >= 0) && (age <= 110))) {
        alert("Alter muss eingegeben werden bzw. zwischen 0-110 Jahre alt sein");
        return;
    }
    if (!(age)) {
        alert("Alter muss eingegeben werden bzw. zwischen 0-110 Jahre alt sein");
        return;
    }

    let grundumsatzKcal;
    let grundumsatzKJ;
    let gesamtumsatzKcal;
    let gesamtumsatzKJ;
    if (female) {
        grundumsatzKcal = Math.round(655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
        gesamtumsatzKcal = Math.round(grundumsatzKcal * activityLevel);
        grundumsatzKJ = Math.round(grundumsatzKcal * 4.1868);
        gesamtumsatzKJ = Math.round(gesamtumsatzKcal * 4.1868);

    } else {
        grundumsatzKcal = Math.round(664.7 + (13.7 * weight) + (5 * height) - (6.8 * age));
        gesamtumsatzKcal = Math.round(grundumsatzKcal * activityLevel);
        grundumsatzKJ = Math.round(grundumsatzKcal * 4.1868);
        gesamtumsatzKJ = Math.round(gesamtumsatzKcal * 4.1868);
    }
    grundumsatzKcalOutput.innerHTML = grundumsatzKcal.toLocaleString('de-DE');
    gesamtumsatzKcalOutput.innerHTML = gesamtumsatzKcal.toLocaleString('de-DE');
    grundumsatzKJOutput.innerHTML = grundumsatzKJ.toLocaleString('de-DE');
    gesamtumsatzKJOutput.innerHTML = gesamtumsatzKJ.toLocaleString('de-DE');
}

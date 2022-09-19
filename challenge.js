function bilangan(event) {
    event.preventDefault()

    let bilanganSatu = document.getElementById("inputTextBilanganSatu").value
    let bilanganDua = document.getElementById("inputTextBilanganDua").value

    let submitTotal = bilanganSatu - bilanganDua

    console.log(submitTotal)

    document.getElementById("submitTotal").innerHTML = submitTotal
}

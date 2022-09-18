function submitData() {

    let name = document.getElementById("inputName").value
    let email = document.getElementById("inputEmail").value
    let phoneNumber = document.getElementById("inputPhoneNumber").value
    let subject = document.getElementById("inputSubject").value
    let messages = document.getElementById("inputMessage").value
    let alertMessage = ("Harap semua kolom untuk diisi")

    if (name == "" || email == "" || phoneNumber == "" || subject =="" || messages == "" ) {
        return alert (alertMessage);
    }

    if (email == "type:email") {
        return alert ('harap isi dengan alamat email')
    }

    let emailReceiver = "bimbinaufal313@gmail.com"

    let a = document.createElement("a")
    a.href=`mailto:${emailReceiver}?subject=${subject}&body="Assalammu'alaikum Warahmatullahi Wabarakaatuh, perkenalkan nama saya ${name}, silahkan kontak saya ke email ${email}, dan nomer telepon ${phoneNumber}, sebelumnya ada yang ingin saya sampaikan terkait ini ${messages}", atas perhatiannya kami ucapkan terima kasih banyak, Wassalammualaikum Warahmatullahi Wabarakaatuh`
    a.target="blank"
    a.click()

    // atau bisa juga kayak gini, tanpa applikasi kedua dari email, langsung ke website  https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}
    let student = {
        name,
        email,
        phoneNumber,
        subject,
        messages,
    }

    console.log (student);
}
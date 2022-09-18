let myProject = []

function submitData(event) {
    event.preventDefault()

    let projectName = document.getElementById("inputName").value
    let startDate = new Date (document.getElementById("inputStartDate").value)
    let endDate = new Date (document.getElementById("inputEndDate").value)
    let messages = document.getElementById("inputMessage").value
    let technologiesNodeJs = document.getElementById("inputTechnologiesNodeJs").checked
    let technologiesJavascript = document.getElementById("inputTechnologiesJavascript").checked
    let technologiesReactJs = document.getElementById("inputTechnologiesReactjs").checked
    let technologiesAngularJs = document.getElementById("inputTechnologiesAngularjs").checked
    let uploadImage = document.getElementById("uploadImage").files
    let resultDate = endDate - startDate

    if (technologiesNodeJs) {
        technologiesNodeJs=document.getElementById("inputTechnologiesNodeJs").value
    } else {}
    
    if (technologiesJavascript) {
        technologiesJavascript=document.getElementById("inputTechnologiesJavascript").value
    } else {} 
    
    if (technologiesReactJs) {
        technologiesReactJs=document.getElementById("inputTechnologiesReactjs").value
    } else {}
    
    if (technologiesAngularJs) {
        technologiesAngularJs=document.getElementById("inputTechnologiesAngularjs").value
    } else {}
    
    console.log (projectName)
    console.log(startDate);
    console.log(endDate);
    console.log(resultDate);
    console.log(messages);
    console.log(technologiesNodeJs);
    console.log(technologiesJavascript);
    console.log(technologiesReactJs);
    console.log(technologiesAngularJs);
    console.log(uploadImage)

    uploadImages=URL.createObjectURL(uploadImage[0])

    let project = {
        projectName,
        startDate,
        endDate,
        resultDate,
        postAt : new Date(),
        messages,
        technologiesNodeJs,
        technologiesJavascript,
        technologiesReactJs,
        technologiesAngularJs,
        uploadImages,
    }

    myProject.push(project)
    console.log(myProject);

    renderBlog ()
}

function renderBlog () {

    document.getElementById("myProjectDetail").innerHTML = ""

    for (let index= 0; index < myProject.length; index++) {
        document.getElementById("myProjectDetail").innerHTML += `
        <a href="myprojectdetail.html" style="color:black;">
            <div class="cardProject">
                <div style="width: 100%; height: 230px; overflow: hidden; position: relative; border-radius: 10px;">
                    <img src="${myProject[index].uploadImages}" style="max-width: 100%; position: absolute; border-radius: 10px;"/>
                </div>
                    <p style="font-size: 20px; font-weight: bold; font-family: 'Segoe UI'; margin-top:5px;">${myProject[index].projectName}</p>
                    <p style="font-size:15px ; color:rgb(114, 114, 114)">${getFullTime(myProject[index].postAt)} | Bimbi Naufal</p><br/>
                    <p class="textDescription">${myProject[index].messages}</p><br/>
                    <p style="font-size:15px ; color:rgb(114, 114, 114); text-align: end;">duration ${getDistanceTime(myProject[index].resultDate)}</p>        
                <div class="iconCard">
                    <i class="${myProject[index].technologiesJavascript}"></i>
                    <i class="${myProject[index].technologiesNodeJs}"></i>
                    <i class="${myProject[index].technologiesReactJs}"></i>
                    <i class="${myProject[index].technologiesAngularJs}"></i>
                    </div>    
                <div class="editDelete">
                    <div class="editDeleteContainer">
                        <a href="#"><button>Edit</button></a>
                    </div>
                    <div class="editDeleteContainerTwo">
                        <a href="#"><button>Delete</button></a>
                    </div>
                </div>
            </div>
        </a>        
        `
    }

}

function getFullTime (time) {
    let month = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Ok", "Nov", "Des"]

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    if(hours < 10){
        hours = "0" + hours
    }else if(minutes < 10){
        minutes = "0" + minutes
    }
    
    // 12 Agustus 2022 09.04
    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    // console.log(fullTime);
    return fullTime
}

function getDistanceTime (time) {

    let startDate = new Date (document.getElementById("inputStartDate").value)
    let endDate = new Date (document.getElementById("inputEndDate").value)

    let distance = endDate - startDate
    console.log(distance);

    let milisecond = 1000 // 1 detik 1000 milisecond
    let secondInHours = 3600 // 1 jam sama dengan 3600 detik
    let hoursInDay = 24 // 1 hari 24 jam
    let dayInMonth = 31 // 1 bulan 31 hari
    let monthInYear = 12 // 1 tahun 12 bulan

    let distanceYear = Math.floor(distance / (milisecond * secondInHours * hoursInDay * dayInMonth * monthInYear))
    let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDay * dayInMonth))
    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSeconds = Math.floor(distance / milisecond)

    if(distanceYear > 0){
        return `${distanceYear} Year`
    } else if (distanceMonth > 0){
        return `${distanceMonth} Month` 
    } else if (distanceDay > 0) {
        return `${distanceDay} Day`
    } else if(distanceHours > 0){
        return `${distanceHours} Hours`
    } else if(distanceMinutes > 0){
        return `${distanceMinutes} Minutes`
    } else {
        return `${distanceSeconds} Seconds`
    }
}
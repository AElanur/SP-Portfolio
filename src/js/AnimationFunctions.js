export function SkillsFunction(data) {
    let classCheck = data.image.classList.contains("swapPosition")
    let image   = data.image
    let text    = data.target

    if(classCheck){
        image.classList.remove("swapPosition")
        text.classList.remove("textAnimation")
        image.classList.add("returnPosition")
        setTimeout(() => {
            image.childNodes[0].src = "../src/img/ahsen.jpg"
        }, 50); 
        return data.component = true; 
    } 
    image.classList.add("swapPosition")
    text.classList.add("textAnimation")
    
    data.component = false;
    data.element = true; 

    let skills = document.getElementsByClassName("skills")[0]
    skills.classList.add("showSkills")

    setTimeout(() => {
       image.classList.remove("returnPosition")
    }, 500)

    setTimeout(() => {
        image.childNodes[0].src = "../src/img/ahsen2.jpg"
    }, 50); 
    return data;
    
}

export function AboutFunction(data) {
}

export function RefFunction(data) {

}

export function EduFunction(data) {

}
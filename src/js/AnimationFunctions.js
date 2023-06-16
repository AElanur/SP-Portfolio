export function SkillsFunction(data) {
    let classCheck = data.image.classList.contains("swapPosition")
    let image = data.image
    if(classCheck){
       image.classList.remove("swapPosition")
        image.classList.add("returnPosition")
        setTimeout(() => {
            image.childNodes[0].src = "../src/img/ahsen.jpg"
        }, 100); 
        data.component = false;
        return data.component = true; 
    } 
    
    image.classList.add("swapPosition")

    setTimeout(() => {
       image.classList.remove("returnPosition")
    }, 500)

    setTimeout(() => {
        image.childNodes[0].src = "../src/img/ahsen2.jpg"
    }, 150); 
    return data.component = false;
    
}

export function AboutFunction(data) {
}

export function RefFunction(data) {

}

export function EduFunction(data) {

}
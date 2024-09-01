// Function to get the position of the element with a given ID
export const scrollToPos = (id) =>{
    const element = document.getElementById(id);
    if(!element){
        console.log("No element found");
    }
    const rect = element.getBoundingClientRect();
    const position = rect.top + window.scrollY;
    window.scrollTo({
        top: position - (0.08 * innerHeight),
        behavior: "smooth"
    })
}
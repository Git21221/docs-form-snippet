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


export const markdownStringChecker=(text)=>{
  const elements = text
      .split(/(\[.*?\]|\{.*?\}|\(.*?\))/)
      .map((part, index) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          return <code key={index} className="p-1 bg-slate-200 rounded-md text-black">{part.slice(1, -1)}</code>;
        }
        if (part.startsWith('{') && part.endsWith('}')) {
          return <i key={index} className="font-medium">{part.slice(1, -1)}</i>;
        }
        if (part.startsWith('(') && part.endsWith(')')) {
          return <strong key={index} className="text-black font-bold">{part.slice(1, -1)}</strong>;
        }
        return part;
      });
    return elements;
}
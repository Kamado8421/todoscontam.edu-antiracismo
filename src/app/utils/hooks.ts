var isMenuOpen: boolean = false;

function setIsMenuOpen(){
  isMenuOpen = !isMenuOpen; 
}

export function useState(){
  return [isMenuOpen, setIsMenuOpen];
}
function animalGroup() {
        this.display = () => {
            const content = document.createElement('div');
            
            const prompt = document.createElement('div');
            prompt.innerHTML = "Please choose from: ";
            
            const animalSelector = document.createElement('select');            
            
            for(let i=0; i<possibleAnimals.length; i++) {
                const animalOption = document.createElement('option');
                      animalOption.innerHTML = possibleAnimals[i];
                animalSelector.appendChild(animalOption);
            }

            this.image = document.createElement('img');
            const name = document.createElement('div');
            const desc = document.createElement('div');
            const link = document.createElement('a');
            const br = document.createElement('br');
            
            const submit = document.createElement('button');
            submit.innerHTML = 'Submit';
            submit.addEventListener("click", () => {
                const selectionIndex = animalSelector.selectedIndex;
                //remove from possibleAnimals the index they selected
                const selectedAnimalObject = animalObjects[selectionIndex];
                const inputVal = selectedAnimalObject.anim_image.url;
            
                //show inputVal image in img tag
                this.image.src = `imgs\\${inputVal}`;
                this.image.alt = inputVal;
                this.image.addEventListener('click', selectedAnimalObject.anim_image.shrink)
                
                
                name.innerHTML = selectedAnimalObject.name;
                desc.innerHTML = selectedAnimalObject.description;
                link.innerHTML  = selectedAnimalObject.url;
                link.href = selectedAnimalObject.url;
            });
            
            const close = document.createElement('button');
            close.style.marginBottom = "20px";
            close.style.backgroundColor = "red";
            close.innerHTML = 'Close';
            close.addEventListener('click', () => {
               content.remove(); 
            });
            
            content.appendChild(prompt);
            content.appendChild(animalSelector);           
            content.appendChild(submit);
            content.appendChild(name);
            content.appendChild(desc);
            content.appendChild(link);
            content.appendChild(br);
            content.appendChild(this.image);
            content.appendChild(close);

            
            
            document.body.appendChild(content);
        }
    }
   
function animal_image (url) {
        this.url = url,
        this.shrink = (event) => {
            let size = event.srcElement.style.maxWidth;
            if (size === '100%') {
                event.srcElement.style.maxWidth = '50%';
            } else {
                event.srcElement.style.maxWidth = '100%';
            }
        }
}
    
function animal(image, name, desc, link) {
        this.anim_image = image,
        this.name = name,
        this.description = desc,
        this.url = link
}
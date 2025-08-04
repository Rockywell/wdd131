const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.classList = "delete"
        
        li.textContent = item
        deleteButton.textContent = '❌';
        
        li.append(deleteButton);
        list.append(li);


        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent); 
            input.focus();
        });
}


getChapterList = () => JSON.parse(localStorage.getItem("chapterList-ls"));
setChapterList = () => {localStorage.setItem("chapterList-ls", JSON.stringify(chaptersArray))};

function deleteChapter(chapter) {
    console.log()
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
    }
});


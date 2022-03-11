// homepage, which means chapter section 
const chapters = () => {
    fetch('https://api.quran.com/api/v4/chapters')
        .then(res => res.json())
        .then(data => showChapters(data.chapters))
}
chapters();
const showChapters = chapters => {
    console.log(chapters)
    chapters.forEach(element => {
        const chapter = document.createElement('div');
        chapter.classList.add('col');
        chapter.innerHTML = `
        
                    <div onclick="chapterClick(${element.id})"
                        class="d-flex justify-content-between align-items-center border border-2 border-secondary m-2 p-2">
                        <div>
                            <h1>{${element.id}}</h1>
                        </div>
                        <div>
                            <h2>${element.name_simple}</h2>
                            <h6>${element.revelation_place} | ${element.verses_count} Verses</h6>
                        </div>
                        <div>
                            <h1>${element.name_arabic}</h1>
                        </div>
                    </div>
               
        `;
        document.getElementById('homepage').appendChild(chapter);
    });
}
const chapterClick=id=>{
    console.log(id);
        fetch('https://api.quran.com/api/v4/quran/verses/uthmani')
    .then(res => res.json())
    .then(data => showVerses(data.verses))
}

verses();


// const showVerses=verses=>{
//     console.log(verses)
//     verses.forEach(element => {
//         const ayat=document.createElement('span');
//         ayat.innerHTML=`${element.text_uthmani} (${element.id}) `;
//         document.getElementById('page').appendChild(ayat);
//     });
// }
// homepage, which means chapter section 
const chapters = () => {
    fetch('https://api.quran.com/api/v4/chapters')
        .then(res => res.json())
        .then(data => showChapters(data.chapters))
}
chapters();
const showChapters = chapters => {
    chapters.forEach(element => {
        const chapter = document.createElement('div');
        chapter.classList.add('col');
        chapter.innerHTML = `
        
                    <div onclick="chapterClick(${element.id}, '${element.name_simple}', '${element.name_arabic}')"
                        class="d-flex justify-content-between align-items-center border border-2 border-secondary m-2 p-2">
                        <div>
                            <h1>{${element.id}}</h1>
                        </div>
                        <div>
                            <h2>${element.name_simple}</h2>
                            <h6 class="text-capitalize">${element.revelation_place} | ${element.verses_count} Verses</h6>
                        </div>
                        <div>
                            <h1>${element.name_arabic}</h1>
                        </div>
                    </div>
               
        `;
        document.getElementById('homepage').appendChild(chapter);
    });
}
const chapterClick = (id, en, ar) => {
    document.getElementById('frontpage').style.display='none';
    document.getElementById('chapter').style.display='block';
    document.getElementById('chapter-name').style.display='block';
    document.getElementById('chapter-name').innerText=`${en} : ${ar}`;
    fetch('https://api.quran.com/api/v4/quran/verses/uthmani')
        .then(res => res.json())
        .then(data => showVerses(data.verses, id))
}

const showVerses = (verses, id) => {


    const chapterVerses = verses.filter(verse => parseInt(verse.verse_key) === id);
    let verseNumber = 1;
    chapterVerses.forEach(element => {
        const ayat = document.createElement('span');
        ayat.innerHTML = `${element.text_uthmani} (${verseNumber++}) `;
        document.getElementById('chapter').appendChild(ayat);
    });
}
const versesToHome=()=>{
    document.getElementById('frontpage').style.display='block';
    document.getElementById('chapter').style.display='none';
    document.getElementById('chapter-name').style.display='none';
    
}
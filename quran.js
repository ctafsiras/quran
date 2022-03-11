const verses = () => {
    fetch('https://api.quran.com/api/v4/quran/verses/uthmani')
    .then(res => res.json())
    .then(data => showVerses(data.verses))
}
verses();
const showVerses=verses=>{
    console.log(verses)
    verses.forEach(element => {
        const ayat=document.createElement('span');
        ayat.innerHTML=`${element.text_uthmani} (${element.id}) `;
        document.getElementById('page').appendChild(ayat);
    });
}
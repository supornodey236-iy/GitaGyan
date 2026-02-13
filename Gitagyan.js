let preacherId=0;
let verseId=1;
let chapVal=1;
let verse;

const base_url ='https://bhagavad-gita3.p.rapidapi.com/v2/chapters';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '08bb58b6damshefede620e792d02p15a89cjsn480eedb288fa',
		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

const Getdata= async()=>{
try {
	let url=`${base_url}/${chapVal}/verses/${verseId}/`;
	const response = await fetch(url, options);
	const result = await response.json();
	verse = result.text;
  let description = result.commentaries[`${preacherId}`].description;
	let translation =result.translations[0].description;
	let shlokabox=document.querySelector('.shloka');
  shlokabox.innerText=verse;
	let descriptionBox = document.querySelector('.description');
	descriptionBox.innerText=description;
	let translationBox = document.querySelector('.translation');
	translationBox.innerText=translation;

	console.log(result);
	console.log(verse);
	console.log(description);
	console.log(translation);
} catch (error) {
		console.error(error);

		  document.querySelector('.shloka').innerText = "Invalid Shloka.......Please Enter A Valid Shloka Number";
  document.querySelector('.description').innerText = "Invalid Shloka.......Please Enter A Valid Shloka Number";
  document.querySelector('.translation').innerText = "Invalid Shloka.......Please Enter A Valid Shloka Number";
}
}
Getdata();
let chapId=document.querySelector('.chapter-select');

chapId.addEventListener('change', function () {
	chapVal = this.value;
	console.log('Selected Chapter:', chapVal);
	Getdata();
});
let selectVerse= document.querySelector('.verse-Id');
selectVerse.addEventListener("change",()=>{
	 verseId= selectVerse.value;
	console.log(verseId);
	Getdata();
})
let preacherElement= document.querySelector('.preacher-select');
preacherElement.addEventListener("change",()=>{
	preacherId = preacherElement.value;
	console.log(preacherId);
	Getdata();
})



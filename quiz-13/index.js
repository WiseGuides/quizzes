let gradeAnswers = () => {
	// dim all answers
	let labels = document.getElementsByTagName('label');
	for (let i=0; i<labels.length; i++) {
		labels[i].classList.add('incorrect');
	}
	
  // add correct class for right answers
  let answers = [1,1,2,4,1,2,2];
  answers.forEach(function(element, index){
    document.getElementById(`q${index +1}a${element}`).nextSibling.nextSibling.classList.add('correct');
  });
};

document.getElementById('submit').onclick = gradeAnswers;
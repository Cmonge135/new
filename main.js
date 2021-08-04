const container = document.querySelector('.container');

document.querySelector('.menu-btn').addEventListener('click', () => {
	container.classList.toggle('active');
});

const checkWidth = () => {
	if(window.innerWidth <= 768){
		container.classList.remove('active');
	} else {
		container.classList.add('active');
	}
}

checkWidth();

window.addEventListener('resize', () => {
	checkWidth();
});
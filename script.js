function getFormvalue() {
    //Write your code here
   let formTag = document.getElementById("form1");
	let firstN = formTag.children[0].value;
	let lastN = formTag.children[2].value;
	alert(`${firstN} ${lastN}`);
}

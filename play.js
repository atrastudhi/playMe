function show() {
    var e = document.getElementById("selectheroes"); 
    var strUser = e.options[e.selectedIndex].value; 
    // console.log(strUser);
    document.getElementById('header').style.display='none';

    if(strUser === 'Knight') {
        document.getElementById('knightGif').style.display='block';
        document.getElementById('wizardGif').style.display='none';
        document.getElementById('archerGif').style.display='none';
    } else if(strUser === 'Wizard') {
        document.getElementById('knightGif').style.display='none';
        document.getElementById('wizardGif').style.display='block';
        document.getElementById('archerGif').style.display='none';
    } else if(strUser === 'Archer') {
        document.getElementById('knightGif').style.display='none';
        document.getElementById('wizardGif').style.display='none';
        document.getElementById('archerGif').style.display='block';
    }

}
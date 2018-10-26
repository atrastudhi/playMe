function show() {
    var e = document.getElementById("selectheroes"); 
    var strUser = e.options[e.selectedIndex].value; 
    // console.log(strUser);
    document.getElementById('header').style.display='none';
    document.getElementById('table').style.display='block'

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

function statPlus(stat) {
    var totalPoint = Number(document.getElementById('totalPoint').innerHTML) - 1

    if(stat === 'str' && totalPoint >= 0) {
        var element = document.getElementById('plusStr')
        var point = Number(element.innerHTML) + 1
        element.innerHTML = point
        document.getElementById('totalPoint').innerHTML = totalPoint
    } else if(stat === 'agi' && totalPoint >= 0) {
        var element = document.getElementById('plusAgi')
        var point = Number(element.innerHTML) + 1
        element.innerHTML = point
        document.getElementById('totalPoint').innerHTML = totalPoint
    } else if(stat === 'int' && totalPoint >= 0) {
        var element = document.getElementById('plusInt')
        var point = Number(element.innerHTML) + 1
        element.innerHTML = point
        document.getElementById('totalPoint').innerHTML = totalPoint
    } else {
        alert('Max Point!')
    }
    
}

// function statPlus() {
//     var element = document.getElementById('plusStr')
//     var point = Number(element.innerHTML) + 1
//     element.innerHTML = point
// }

// function statPlus() {
//     var element = document.getElementById('plusStr')
//     var point = Number(element.innerHTML) + 1
//     element.innerHTML = point
// }
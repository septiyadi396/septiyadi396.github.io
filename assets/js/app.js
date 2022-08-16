function umur() {
    const birthDate = new Date('09/03/1996')
    const currentYear = new Date()

    let umur = currentYear.getFullYear() - birthDate.getFullYear()
    if (currentYear.getMonth() < birthDate.getMonth() || 
        currentYear.getMonth() == birthDate.getMonth() && currentYear.getDate() < birthDate.getDate()) {
        umur--;
    }
    console.log('umur',umur);
    return `"1996 (${umur})",`;
}

$(document).ready(function () {
    $('#umur').text(umur())

    $('.curly-bracket').text('{')
    $('.curly-bracket-closing').text('}')
    $('.square-bracket').text('[')
    $('.square-bracket-closing').text(']')

    
    $('iconify-icon').each(function (index,data){
        const obj = $(data).attr('icon').split(':')
        if (obj[0] == 'logos') {
            console.log('tes',data);
            $(data).attr('style', 'background-color: #eceff4');
        }
    })
    // addtionalBackground.forEach(element => {
        
    // });
    // console.log('tes',addtionalBackground);
});
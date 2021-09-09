let friends = ['Jerry', 'Kevin', 'Diego', 'Alex', 'Emma']
for (let i = 0; i < friends.length; i++) {
    for (let j = 99; j > 0; j--) {
    if (j > 2) {
        console.log(j, ' Lines of code in the file, '+ j + ' lines of code;'
        + friends[i] + ' strikes one out clears it all out,'+ (j - 1) +
        ' lines of code in the file')
     }
     else if (j == 2){ 
        console.log(j + ' Lines of code in the file, '+ j + ' lines of code; '
        + friends[i] + ' strikes one out clears it all out,'+ (j - 1) +
        ' line of code in the file')
     }
     else {
        console.log(j + ' Line of code in the file, '+ j + ' line of code; '
        + friends[i] + ' strikes one out clears it all out, '+ (j - 1) +
        ' line of code in the file ')
     }
   
}
}
//99 lines of code in the file, 
//99 lines of code; John strikes one out, 
//clears it all out, 98 lines of code in the file


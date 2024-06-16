let secretmessage=['learning','is','not','about','what','you','get','easily','the','first','time','it','is',
    'about','what','you','can','figure','out','-2015','chris','pine','learn','javascript'
];
secretmessage.pop()
console.log(secretmessage);
console.log(secretmessage.length);
secretmessage.push('to','program')
console.log(secretmessage);
secretmessage[7]='right'
console.log(secretmessage);
secretmessage.shift()
console.log(secretmessage);
secretmessage.unshift('programming')
console.log(secretmessage);
secretmessage.splice(6,5,"know")
console.log(secretmessage);
console.log(secretmessage.join(''));
const Noun = () => {
    const noun = ['You ','Your friend ','Your relative ','Your enemy '];
    let index = Math.floor(Math.random() * 4);
    randNoun = noun[index];
    return randNoun;
}

const AddVerb = () => {
    var noun = Noun();
        if (noun === 'You '){
            verb = ['are ', 'are not ','will ','will not ', 'should ','should not '];
        }
        else if (noun === 'Your friend ' ||noun === 'Your relative ' ||noun === 'Your enemy ') {
            verb = ['is ','is not ','will ','will not '];
        }
    let index = Math.floor(Math.random() * verb.length);
    randVerb = verb[index];
    return (noun + randVerb);
}

const completeMessage = () => {
    var sentenceStem = AddVerb();
        if (sentenceStem[3] != 'r' && sentenceStem[4] === 'a') {
            endOfSentence = ['going to die this year','a very cynical person','going on vacation soon','going to have a great year'];
        }
        else if (sentenceStem[3] != 'r' && sentenceStem[4] === 'w') {
            endOfSentence = ['create something great','go for the gold','get there soon','master that topic'];
        }
        else if (sentenceStem[3] != 'r' && sentenceStem[4] === 's') {
            endOfSentence = ['pursue that relationship','spend money','eat something fatty'];
        }
        else if (sentenceStem[5] === 'f' && sentenceStem[12] === 'i') {
            endOfSentence = ['mad at you','needing you','really hurting','wrong'];
        }
        else if (sentenceStem[5] === 'f' && sentenceStem[12] === 'w') {
            endOfSentence = ['care','be there for you','continue to listen','run away'];
        }
        else if (sentenceStem[5] === 'e' && sentenceStem[11] === 'i') {
            endOfSentence = ['succeeding','important','your friend','the same as you'];
        }
        else if (sentenceStem[5] === 'e' && sentenceStem[11] === 'w') {
            endOfSentence = ['strike back','succeed','be your enemy for a long time','go away'];
        }
        else if (sentenceStem[5] === 'r' && sentenceStem[14] === 'i') {
            const relatives = ['Your mom', 'Your dad', 'Your aunt', 'Your uncle', 'Your cousin'];
            relativeIndex = Math.floor(Math.random() * relatives.length);
            var specificRelative = relatives[relativeIndex];
            sentenceStem = sentenceStem.slice(13,sentenceStem.length);
            sentenceStem = specificRelative + sentenceStem;
            endOfSentence = ['going to be okay','expecting to hear from you','hurting','thriving'];
        }
        else if (sentenceStem[5] === 'r' && sentenceStem[14] === 'w') {
            const relatives = ['Your mom', 'Your dad', 'Your aunt', 'Your uncle', 'Your cousin'];
            relativeIndex = Math.floor(Math.random() * relatives.length);
            var specificRelative = relatives[relativeIndex];
            sentenceStem = sentenceStem.slice(13,sentenceStem.length);
            sentenceStem = specificRelative + sentenceStem;
            endOfSentence = ['reach out','make it','come back','reach out soon'];
        }
        let index = Math.floor(Math.random() * endOfSentence.length);
        var chosenEnd = endOfSentence[index];
        return (sentenceStem + chosenEnd);
}

const mixedMessage = () => {
    var completedMessage = completeMessage();
    const punctuation = ['.','!']
    index = Math.floor(Math.random() * punctuation.length);
    addedPunctuation = punctuation[index];
    return (completedMessage + addedPunctuation);
}
console.log(mixedMessage());

var countDeafRats = function(town) {
    let PPposition;
    let leftMouse, rightMouse = 0;
    
    for(let i=0; i<town.length; i++) {
        if(town[i] == '~' && town[i+1] == 'O') {
            rightMouse++;
        } else if(town[i] == 'O' && town[i+1] == '~') {
            leftMouse++;
        }
    }

    console.log(`rightMouse -> ${rightMouse}`);
    console.log(`leftMouse -> ${leftMouse}`);

    return 0;
}

countDeafRats("~O~O~O~O P");
countDeafRats("P O~ O~ ~O O~");
countDeafRats("~O~O~O~OP~O~OO~");

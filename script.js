let text = prompt('What would you like to do - Select one from (new,list,delete,quit)');

const todoList = [];

while (text !== 'quit') {
    if (text === 'new') {
        text = prompt('Add a new item');
        todoList.push(text);
        console.log(todoList);
        text = prompt('What would you like to do -  Select one from (new,list,delete,quit)');
    };
    if (text === 'list') {
        if (todoList.length === 0) {
            text = prompt('list is empty. Kindly add new item first');
        };
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}:${todoList[i]}`);
        };
        if (todoList.length > 0) {
            text = prompt('What would you like to do - Select one from (new,list,delete,quit)');
        };

    };

    if (text === 'delete') {
        if (todoList.length === 0) {
            text = prompt('list is empty. Kindly add new item first');
        };
        if (todoList.length > 0) {
            let indexNo = parseInt(prompt('Enter existing number you want to delete'));
            if (indexNo >= todoList.length) {
                indexNo = parseInt(prompt('Enter existing number you want to delete'));
            };
            if (indexNo < todoList.length && indexNo >= 0) {
                todoList.splice(indexNo, 1);
                console.log(todoList);
                text = prompt('What would you like to do -  Select one from (new,list,delete,quit)');
            };

        };
    };

    if (text === 'quit') {
        break;
    };

    if (text !== 'new' && text !== 'list' && text !== 'delete') {
        text = prompt('Select option- new,list,delete,quit');
    };
};

if (text === 'quit') console.log('Quit App');


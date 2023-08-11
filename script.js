animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

function getInfo (arr,tableName) {

        table = `<table class='animals'> <caption><strong>${tableName} info</strong></caption><tbody>`;

        for (i = 0; i < arr.length; i++) {
            tableRow = arr[i];
            console.log(tableRow);
            table+=`<tr>`;

            for (j = 0; j < tableRow.length; j++) {
                tableCell = `<td>${tableRow[j]}</td>`;
                console.log(tableCell);
                table+=tableCell;
            }
            table+= "</tr>";
        }

        table += `</tbody></table>`;
        console.log(table);
        return table;
    }


animalsTable=getInfo(animals, `Animals`);
document.write(animalsTable);

foodTable=getInfo(food, `Food`);
document.write(foodTable);


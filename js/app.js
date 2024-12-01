const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];

let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rows = 5

function usersTemplateGenerator(allUsersArray, usersListWrapper, currentPage, rows) {

    usersListWrapper.innerHTML = ''
    let lastIndex = currentPage * rows
    let startIndex = lastIndex - rows

    let mainIndex = allUsersArray.slice(startIndex, lastIndex)

    mainIndex.forEach(function (users) {

        let boxItem = document.createElement('div')
        boxItem.classList.add('item')
        boxItem.innerHTML = users.name + ' ' + users.family

        usersListWrapper.append(boxItem)
    })

}

function buttonGenerator(allUsersArray, paginationContainer, rows) {
    let pageCount = Math.ceil(allUsersArray.length / rows)
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = setupPagination(i, allUsersArray)
        paginationContainer.append(btn)
    }
}

function setupPagination(page, allUsersArray) {

    let button = document.createElement('button')
    button.innerHTML = page

    if (currentPage === page) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        usersTemplateGenerator(allUsersArray, userListContainer, currentPage, rows)


        let activeBtn = document.querySelector('.active')
        activeBtn.classList.remove('active')

        button.classList.add('active')


    })




    return button
}

usersTemplateGenerator(listItems, userListContainer, currentPage, rows)
buttonGenerator(listItems, paginationContainer, rows)
const pagingUl = document.querySelector('.pagination ul')

let pagingLi;
let activeLiP;
let activeLiN;

const paging = (totalNumOfPages, currentPage) => {
    pagingLi = '';
    activeLiP = 'enabled'
    activeLiN = 'enabled'

if (currentPage <= 1) {
    activeLiP = 'disabled'
}
else if (currentPage >= totalNumOfPages) {
    activeLiN = 'disabled'
}


    pagingLi += `<li class="${activeLiP}" onclick="paging(${totalNumOfPages}, ${currentPage -1})">Previous</li>`

for (let pageNumber = currentPage - 2; pageNumber <= currentPage + 2; pageNumber++) {
    if (pageNumber > 0 && pageNumber <= totalNumOfPages) {
    pagingLi += `<li onclick="paging(${totalNumOfPages}, ${pageNumber})">${pageNumber}</li>`
    }
}

    pagingLi += `<li class="${activeLiN}" onclick="paging(${totalNumOfPages}, ${currentPage + 1})">Next</li>`
    
pagingUl.innerHTML = pagingLi;

}

paging(20,8)

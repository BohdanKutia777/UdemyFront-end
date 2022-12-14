import { render } from "./render.js";
import { fetchUserData, renderUserData, fetchRepositories } from "./reqest.js";
import { renderRepositories } from "./creativeTask.js";
import { showSpinner, hideSpinner } from "./spinner.js";
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const reposList = document.querySelector('.repo-list');



document.addEventListener('DOMContentLoaded', () => {
    render();
});


const searchUser = async () => {
    const userId = userNameInputElem.value;
    userNameInputElem.value = "";
    showSpinner();
    try {
        const userData = await fetchUserData(userId);
        renderUserData(userData);
        const repostList = await fetchRepositories(userData.repos_url);
        renderRepositories(repostList)
    } catch (error) {
            reposList.textContent = '';
            return alert(error.message);
    } finally {
        hideSpinner()
    }


    // fetchUserData(userId)
    // .then(dataUser => {
    //     renderUserData(dataUser)
    //     return dataUser.repos_url;
    // })
    // .then(fetchRepositories)
    // .then(repositoriesData => renderRepositories(repositoriesData))
    // .catch(error => {
    //     reposList.textContent = '';
    //     return alert(error.message);
    // })
    // .finally(() => {
    //     hideSpinner()
    // });
    
};
showUserBtnElem.addEventListener('click', searchUser);

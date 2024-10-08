const formEl = document.querySelector('form');

const handleFormSubmit = function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username').value.trim();
  const titleEl = document.querySelector('#title').value.trim();
  const contentEl = document.querySelector('#content').value.trim();

  if (!usernameEl || !titleEl || !contentEl) {
    const errorEl = document.querySelector('#error');
    errorEl.textContent = 'Form Needs To be Completed';

    setTimeout(function () {
      errorEl.textContent = '';
    }, 4000);

    return;
  }

  const formData = {
    username: usernameEl,
    title: titleEl,
    content: contentEl,
  };

  storeLocalStorage(formData);
  redirectPage();
};

const redirectPage = function () {
  location.href = './blog.html';
};

const storeLocalStorage = function (data) {
  const allBlogs = readLocalStorage();

  allBlogs.push(data);

  const stringData = JSON.stringify(allBlogs);

  localStorage.setItem('blogs', stringData);
};

formEl.addEventListener('submit', handleFormSubmit);


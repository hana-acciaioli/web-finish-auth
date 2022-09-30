import { getUser, signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
// > Part C:
//     - get the user (if there is one)
const user = getUser();
if (!user) {
    const base =
        location.pathname === '/' || location.pathname === 'web-finish-auth/auth/' ? './' : '../';
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
}
//     - check if there is not a user and if so do the redirect
//       redirect code: location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser);

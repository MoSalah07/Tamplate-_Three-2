let linksMega = document.querySelector( '.other-links' );
let mega = document.querySelector( '.mega-menu' );
linksMega.addEventListener('click', _ => {
    mega.classList.toggle( 'active' );
});
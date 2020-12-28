import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(7).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(8).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});
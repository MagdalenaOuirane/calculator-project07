// testing adding two dots in jsdom



test('Clicking buttons 2,+, 1,= gives the value 3 in the input field', () => {

    // when

    document.getElementById('btn-2').click();
    document.getElementById('btn-+').click();
    document.getElementById('btn-1').click();
    document.getElementById('btn-=').click();

    expect(document.getElementById('input').innerText).toEqual('3');
} )




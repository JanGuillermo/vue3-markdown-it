import render from '#/render';

describe('markdown-it-abbr tests', () => {
  let source, result;

  it('should be able to support abbreviations', async () => {
    source = `
      *[D4C]: Dirty Deeds Done Dirt Cheap
      D4C is such a bizarre stand.
    `;
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
  });
});

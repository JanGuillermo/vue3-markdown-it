import render from '#/render';

describe('markdown-it-latex tests', () => {
  let source, result;

  it('should be able to support LaTeX', async () => {
    source = '`$E = mc^2$`';
    result = render(source);

    await global.wrapper.setProps({ source });
    expect(global.wrapper.html()).toContain(result);
    expect(global.wrapper.html()).toContain('katex');
  });
});
